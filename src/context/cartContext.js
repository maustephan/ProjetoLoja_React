import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext("Contexto");

export function CartProvider({ value=[], children }){
    const [cart, setCart] = useState(value);

    function addToCart(produto){
        if(cart.includes(produto)){
            return <p>Produto já tem no carrinho</p>;
        }

        setCart((oldCart) =>([...oldCart,produto]));

    }

    function removeFromCart(produto){
        setCart((oldCart) => oldCart.filter((p) => p.id !== produto.id));
    }


    return (
        <CartContext.Provider value ={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
        
    );
}

export const useCart = () => useContext(CartContext);