import React, {useContext, useState} from "react";
import { useCart } from "../context/CartContext";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import ModalPedido from "../components/ModalPedido";
import "../styles/Cart.css";

function Cart() {
  const {cart, removeFromCart, clear, isInCart, totalItens, valorTotal, generateOrder} = useCart();
  const formater = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
  console.log(cart)
  const [modal, setModal] = useState(false);
  const [numPedido, setNumPedido] = useState('');
  const [nomeCompleto,setNomeCompleto] = useState('');
  const [phone,setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirm, setEmailConfirm] = useState('');

  // var products = [
  //   {name:'caneta', value:2.30, quantity:3}, 
  //   {name:'caderno', value:13.40, quantity:2}, 
  //   {name:'borracha', value:1.2, quantity:5}
  // ]
  

  // const totalItens = cart.reduce(getTotalItens, 0);
  // function getTotalItens(totalItens, item) {
  //  return totalItens + (item.quantidade);
  // }
  
  function sendOrder({nomeCompleto, phone, email}){

    console.log(nomeCompleto,"nome")
    console.log(phone,"phone")
    console.log(email,"email")

    const order = generateOrder({nomeCompleto, phone, email});
    const db = getFirestore();
    const collectionRef = collection(db, "orders");
    
    console.log(generateOrder.name,"generate")
    
    addDoc(collectionRef, order)
      .then(({ id }) => {
        console.log(id);
        setNumPedido(id);
        setModal(true);
        // clear();
      })
      .catch(error => console.error(error));
    // console.log(order)
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    if (validaEmail(email) && (email === emailConfirm)){
      sendOrder({nomeCompleto, phone, email});
    }
    alert("E-mail diferente, favor conferir os e-mail's digitados");
  }

  function validaEmail(email) {
    const validEmail = /\S+@\S+\.\S+/;
    return validEmail.test(email);
  }

  return(
    <>
      <h1>Carrinho de Compras</h1>
      
        {cart.length > 0 ? (
          <>
          {cart.map((item, index) => (

              
              <div id="car" className="carrinhoCompras" key={index}>
                <table className="table table-hover">
                  <thead className="table-light">
                    <tr>
                      <th scope="col">Produto</th>
                      <th scope="col">Valor Unitário</th>
                      <th scope="col">Quantidade</th>
                      <th scope="col">Valor Total</th>
                      <th scope="col">Retirar Item</th>
                    </tr>
                  </thead>
                  <tbody id="carrinho"> 
                    <tr>
                      <td>{item.produto}</td>
                      <td>{formater.format(item.preço)}</td>
                      <td>{item.quantidade}</td>
                      <td>{formater.format(item.preço*item.quantidade)}</td>
                      <td><i onClick={() => removeFromCart(item)} className="fa-solid fa-xmark excluir"></i></td>
                    </tr>
                      <td id="carTeste"></td>
                  </tbody>
                  <tfoot>
                    <tr>
                      {/* <td id="total" colspan="6"></td> */}
                    </tr>
                  </tfoot>
                </table>
              </div>                
              


            ))}
            <h4>Total de itens adicionado no carrtinho {totalItens} e o valor total da compra é de {formater.format(valorTotal)}</h4>
            <button onClick={() => clear()} style={{display: "flexbox"}}>Limpar carrinho</button>
              <div className="container">
                <form className="form">
                  <h5>Informe seus dados, para finalizar a compra:</h5>
                  <label>Digite seu nome completo:
                    <input
                      type="text"
                      value={nomeCompleto}
                      onChange={e => setNomeCompleto(e.target.value)}
                    />
                  </label><br />
                  <label>Digite seu telefone:
                    <input
                      type="text"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                    />
                  </label><br />
                  <label>Digite seu e-mail:
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </label><br />
                  <label>Confirme seu e-mail:
                  <input
                      type="email"
                      value={emailConfirm}
                      onChange={e => setEmailConfirm(e.target.value)}
                    />
                  </label>
                  <br />
                  { (nomeCompleto === '') || (email === '') || (phone === '') || (emailConfirm === '') ? <button onClick={handleSubmit} disabled="true">Finalizar compra</button> : <button onClick={handleSubmit}>Finalizar compra</button>}
                </form>
                </div>
            <ModalPedido openModal={modal} pedido={numPedido}/>
            {console.log()}
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