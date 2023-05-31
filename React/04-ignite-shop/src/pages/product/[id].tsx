import { GetStaticPaths, GetStaticProps } from 'next';
import { ImageContainer, ProductContainer, ProductDetails } from '../../../styles/pages/product';
import { stripe } from '../../lib/stripe';
import Stripe from 'stripe';
import Image from 'next/image';
import Head from 'next/head';
import { useCart } from '../../contexts/CartContext';

interface ProductProps{
    product:{
        id: string,
        name: string,
        imageUrl: string,
        price: number,
        description: string,
        defaultPriceId: string,
    }
}

export default function Product({product}:ProductProps) {
    const {addToCart} = useCart()


    return(
        <>
            <Head>
                <title>{product.name} | Ignite Shop</title>
            </Head>
            <ProductContainer>
                <ImageContainer>
                    <Image src={product.imageUrl} alt='' width={520} height={480} />
                </ImageContainer>
                <ProductDetails>
                    <h1>{product.name}</h1>
                    <span>{`R$ ${product.price}`}</span>

                    <p>{product.description}</p>

                    <button onClick={()=>{addToCart(product)}}>
                        Colocar na sacola
                    </button>
                </ProductDetails>
            </ProductContainer>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths:[
            {params: {id: 'prod_NxEJY5RJBl9w20'}}
        ],
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({params}) => {
    const productId = params.id;

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price']
    })

    const price = product.default_price as Stripe.Price
    
    

    return {
        props: {
            product:{
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                price: price.unit_amount / 100,
                description: product.description,
                defaultPriceId: price.id

              }
        },
        revalidate: 60 * 60 * 1
    }
}