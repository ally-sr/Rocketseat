import React from 'react'
import { ImageContainer, ImagesContainer, SuccessContainer, SuccessContent } from '../../styles/pages/sucess'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { stripe } from '../lib/stripe'
import Stripe from 'stripe'
import Image from 'next/image'
import Head from 'next/head'

interface SuccessProps{
  customerName:string,
  products: {
    name:string,
    imageUrl:string
  }[]
}

export default function Success({customerName, products} : SuccessProps) {
  return (
    <>
      <Head>
         <title>Compra efetuada | Ignite Shop</title>
         <meta name='robots' content='noindex' />
      </Head>
      <SuccessContainer>
        <SuccessContent >
        { products.length > 0 ? products.map((product, index) => (
            
              <ImagesContainer key={index}>
                <Image src={product.imageUrl} width={120} height={110} alt='' />
              </ImagesContainer>
          )): 
              <ImageContainer key={0}>
                <Image src={products[0].imageUrl} width={120} height={110} alt='' />
              </ImageContainer>
          }
          </SuccessContent>
          <h1>Compra Efetuada!</h1>
           <p>
                Uhuul <strong>{customerName}</strong>, suas <strong>{products.length}</strong> camisas já estão a caminho da sua casa.
          </p>
          <a href="/">Voltar ao Catálogo</a>
      </SuccessContainer>
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async ({ query, params }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items', 'line_items.data.price.product'],
    });

    const customerName = session.customer_details.name;
    const products = session.line_items.data.map((item) => item.price.product as Stripe.Product);

    return {
      props: {
        customerName: customerName,
        products: products.map((product) => ({
          name: product.name,
          imageUrl: product.images[0],
        })),
      },
    };
  } catch (err) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};


// export const getServerSideProps: GetServerSideProps = async ({ query, params }) => {
  
//   if(!query.session_id){
//     return {
//       redirect:{
//         destination: '/',
//         permanent: false,
//       }
//     }
//   }
  
//   const sessionId = String(query.session_id);
  
//   try {
//     const session = await stripe.checkout.sessions.retrieve(sessionId, {
//       expand: ['line_items', 'line_items.data.price.product']
//     })


//     const customerName = session.customer_details.name;
//     const product = session.line_items.data[0].price.product as Stripe.Product

//     return {
//       props:{
//         customerName: customerName,
//         product: {
//           name: product.name,
//           imageUrl: product.images[0]

//         }
//       }
//     }
//   } catch (err) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false
//       }
//     }
//   }
  
// }