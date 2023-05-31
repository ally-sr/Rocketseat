import Image from "next/image"
import { GetStaticProps } from "next"
import { HomeContainer, Product } from "../../styles/pages/home"
import Link from "next/link"
import { useKeenSlider } from 'keen-slider/react'
import Head from "next/head"
import 'keen-slider/keen-slider.min.css'

import { stripe } from "../lib/stripe"
import Stripe from "stripe"
import { Handbag } from "phosphor-react"
import { CartProvider, useCart } from "../contexts/CartContext"

interface HomeProps {
  products:{
    id: string,
    name: string,
    imageUrl: string,
    price: number,
    defaultPriceId:string,
  }[]
}

export default function Home({products}:HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides:{
      perView: 2,
      spacing: 40,
    }
  })

  const {addToCart, cartItems} = useCart()

  return (
    <>
      <Head>
        <title>Ignite Shop | Home </title>
      </Head>

        <HomeContainer ref={sliderRef}>
          {products.map(product => {
            return (
                <Product  className="keen-slider__slide">
                  <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
                    <Image src={product.imageUrl} alt="" width={520} height={480}/>
                  </Link>
                  <footer>
                    <div>
                      <strong>{product.name}</strong>
                      <span>{`R$ ${product.price.toFixed(2)}`}</span>
                    </div>
                    <button onClick={() => {addToCart(product)}}>
                      <Handbag/>
                      </button>
                    </footer>
                </Product>
              
            )
          })}
          
        </HomeContainer>
    </>

  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount / 100,
      defaultPriceId: price.id

    }
  })

  return {
    props:{
      products,
    },
    revalidate:60 * 60 * 2,
  }
}
