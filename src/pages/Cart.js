import { useLocation } from "react-router-dom";

function Cart() {
  let state  = useLocation();

  return(
    <>
    {console.log(state)}
      <h1>Carrinho de Compras = </h1>
    </>
  );
}

export default Cart;