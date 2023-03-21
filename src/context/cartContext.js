import React, { useState, createContext, useContext } from "react";

export const CartContext = createContext("Contexto");

export function CartProvider({ children }){
    const [cart, setCart] = useState([]);

    function addToCart(produto){
        // if(cart.includes(produto)){ 
        //     return <p>Produto já tem no carrinho</p>;
        // }

        setCart((oldCart) => [...oldCart, produto]);
       
    }        

    function removeFromCart(produto){
        // setCart((oldCart) => oldCart.filter((p) => p.id !== produto.id));
        setCart((oldCart) => oldCart.filter((p) => p !== produto));
    }

    function isInCart(produto){
        return cart.some((p) => p.produto === produto)

    }

    function clear() {
        setCart([]);
    };

    const quantidadeItens = cart.length;

    const totalItens = cart.reduce(getTotalItens, 0);
    function getTotalItens(totalItens, item) {
     return totalItens + (item.quantidade);
    }

    const valorTotal = cart.reduce(getTotal, 0);
    function getTotal(valorTotal, item) {
     return valorTotal + (item.preço * item.quantidade);
    }

    function generateOrder({nomeCompleto, phone, email}){
        return {
            buyer: { name: nomeCompleto, email: email, phone: phone},
            item: cart.map((item) => ({
                id: item.id,
                produto: item.produto,
                preço: item.preço,
                quantidade: item.quantidade
            })),
            data: new Date(),
            total: valorTotal,
        };
        console.log()
    }


    return (
        <CartContext.Provider value ={{ cart, addToCart, removeFromCart, isInCart, clear, totalItens, totalItens, valorTotal, generateOrder }}>
            {children}
        </CartContext.Provider>
        
    );
}

export const useCart = () => useContext(CartContext);