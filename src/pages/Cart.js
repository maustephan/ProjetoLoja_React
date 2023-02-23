import React, {useContext} from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const {cart, removeFromCart} = useContext(CartContext)
console.log(cart)

  return(
    <>
      <h1>Carrinho de Compras</h1>
      <ul>
        {cart.map((item, index) => (
          <>
            <li key={index}>
              <p>id: {item[0]} - 
              Produto: {item[1]} - 
              Preço: {item[2].toFixed(2)} - 
              Quantidade: {item[3]} - 
              Valor Total R$:{(item[2]*item[3]).toFixed(2)} 
              <button onClick={() => removeFromCart(item)}>
                Remover
              </button></p>
            </li>
            <li>{item}</li>
          </>
        ))}
      </ul>
    </>
  );
}

export default Cart;