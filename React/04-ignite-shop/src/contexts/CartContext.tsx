

import React, { createContext, useState, useContext, ReactNode } from 'react';

type CartItem = {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    defaultPriceId:string;
}

type CartContextType = {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    isCartOpen: boolean;
    handleCart: () => void;
    removeFromCart: (item: CartItem) => void;
}
type CartProviderType = {
    children: ReactNode;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<CartProviderType> = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
    const addToCart = (item: CartItem) => {
      setCartItems([...cartItems, item]);
    };

    const removeFromCart = (item: CartItem) => {
        const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
        setCartItems(updatedCartItems);
      };
    

    function handleCart(){
        setIsCartOpen(!isCartOpen);
    }


    return (
        <CartContext.Provider
         value={{ 
            cartItems, 
            addToCart,
            isCartOpen,
            handleCart,
            removeFromCart,
        }}>
            {children}
        </CartContext.Provider>
    )
};

export const useCart = () => {
    const cartContext = useContext(CartContext);
    if (!cartContext) {
        throw new Error('useCart deve ser usado dentro de um CartProvider');
    }
    return cartContext;
}


