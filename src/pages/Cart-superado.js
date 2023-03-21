import React, {useContext, useState} from "react";
import { useCart } from "../context/CartContext";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import ModalPedido from "../components/ModalPedido";

function Cart() {
  const {cart, removeFromCart, clear, isInCart, totalItens, valorTotal, generateOrder} = useCart();
  const formater = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
  console.log(cart)
  const [modal, setModal] = useState(false);
  const [numPedido, setNumPedido] = useState('');

  // var products = [
  //   {name:'caneta', value:2.30, quantity:3}, 
  //   {name:'caderno', value:13.40, quantity:2}, 
  //   {name:'borracha', value:1.2, quantity:5}
  // ]
  

  // const totalItens = cart.reduce(getTotalItens, 0);
  // function getTotalItens(totalItens, item) {
  //  return totalItens + (item.quantidade);
  // }
  
  function sendOrder(){
    const order = generateOrder();

    const db = getFirestore();
    const collectionRef = collection(db, "orders");
    addDoc(collectionRef, order)
      .then(({ id }) => {
        console.log(id);
        setNumPedido(id);
        setModal(true);
        // clear();
      })
      .catch(error => console.error(error));
    console.log(order)
  }
  

  return(
    <>
      <h1>Carrinho de Compras</h1>
        {cart.length > 0 ? (
          <>
          {cart.map((item, index) => (
            
            <ul>
              <li key={index}>
                <p>{item.produto} - {formater.format(item.preço)} - Quantidade: {item.quantidade} - 
                Valor Total R$: {formater.format(item.preço*item.quantidade)} { "  " } 
                <button onClick={() => removeFromCart(item)}>
                  Remover
                </button><br/></p>
              </li>
            </ul>

            ))}
            <h4>Total de itens adicionado no carrtinho {totalItens} e o valor total da compra é de {formater.format(valorTotal)}</h4>
            <button onClick={() => clear()}>Limpar carrinho</button>
            {/* <button onClick={sendOrder}>Finalizar compra</button> */}
            <button onClick={sendOrder}>Finalizar compra</button>
            <ModalPedido openModal={modal} pedido={numPedido}/>
            </>
            ) : (
                  <>
                    <h4> O carrinho está vazio </h4>
                    <Link to='/'>Ir para a página inicial</Link>
                  </>
                )
        }  
    </>
  );
}

export default Cart;