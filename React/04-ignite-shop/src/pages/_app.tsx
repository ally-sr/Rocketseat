import { AppProps } from "next/app";
import { globalStyles } from "../../styles/global";
import logoImg from '../assets/logo.svg';
import { CartButton, Container, NextHeader } from "../../styles/pages/app";
import Image from "next/image";
import { Handbag,  X } from "phosphor-react";
import { CartContainer, CartImageContainer, CartItem, CartItemContent, CheckoutContainer, CheckoutInfo } from "../../styles/pages/cart";
import { CartProvider, useCart } from "../contexts/CartContext";
import axios from "axios";
import { useState } from "react";
import Link from "next/link";


globalStyles()

function Cart() {
  
  const {  cartItems, isCartOpen, handleCart, removeFromCart } = useCart()
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

  function calcularTotal(){
    let total = 0;
    for (const item of cartItems){
      total += item.price;
    }
    return total.toFixed(2);
  }
  
  async function createCheckoutSession() {

    console.log(cartItems)
    try {
      setIsCreatingCheckoutSession(true);
  
      const response = await axios.post('/api/checkout', {
        priceIds: cartItems.map((item) => item.defaultPriceId),
      });
      
      console.log(response.data)

      const {checkoutUrl} = response.data
      window.location.href = checkoutUrl
     
    } catch (error) {
      setIsCreatingCheckoutSession(false);
      alert('Falha ao direcionar para o checkout');
    }
  }

  return (
        <CartContainer className={isCartOpen ? 'open' : ''}>
        <header>
          <span onClick={handleCart}><X/></span>
          <h1>Sacola de Compras</h1>
        </header>
        {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <>
              <CartItem key={item.id}>
                <CartImageContainer>
                  <Image src={item.imageUrl} alt="" width={94} height={94}/>
                </CartImageContainer>
                <CartItemContent>
                  <h1>
                    {item.name}
                  </h1>
                  <strong>
                  {`R$ ${item.price.toFixed(2)}`}
                  </strong>
                  <a onClick={() => {removeFromCart(item)}}>Remover</a>
                </CartItemContent>
            </CartItem>
            
          </>
            ))
          ) : (
            <h4>Adicione produtos ao seu carrinho :)</h4>
          )}
          {cartItems.length > 0 ? (
              <>
                <CheckoutContainer>
                      <CheckoutInfo>
                        <div>
                          <p>Quantidade</p>
                          <strong>Valor Total</strong>
                        </div>
                        <div>
                          <span>{cartItems.length > 1 ? ( `${cartItems.length} itens` ) : `${cartItems.length} item`}</span>
                          <h1>{`R$ ${calcularTotal()}`}</h1>
                        </div>
                      </CheckoutInfo>
                      <button onClick={createCheckoutSession} disabled={isCreatingCheckoutSession}>
                        Finalizar Compra
                      </button>
                  </CheckoutContainer>
                  </>
            )
             : (
              <>
                <CheckoutContainer>
                      <CheckoutInfo>
                        <div>
                          <p>Quantidade</p>
                          <strong>Valor Total</strong>
                        </div>
                        <div>
                          <span>Sem itens</span>
                          <h1>R$0</h1>
                        </div>
                      </CheckoutInfo>
                      <button disabled>
                        Finalizar Compra
                      </button>
                  </CheckoutContainer>
                </>
            )}
      </CartContainer>
  )
}

function Header(){
  const {  handleCart, cartItems } = useCart()

  return (
          <NextHeader>
            <Link href='/'>
              <Image src={logoImg} alt="" />
            </Link>
              <CartButton className="full" onClick={handleCart}>
                <Handbag />
                {cartItems.length > 0 ? (
                  <span>{cartItems.length}</span>
                ): ''}
              </CartButton>
          </NextHeader>
    )
}

export default function App({ Component, pageProps }: AppProps) {
  
  return (
      <CartProvider>
        <Container>
          <Header/>
          <Cart/>
          <Component {...pageProps} />
        </Container>
      </CartProvider>
  )
}

