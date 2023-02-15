import ItemList from "./ItemList";

function ItemListContainer({ greeting }) {
    return(
      <>
        <h1 className="title">
          Loja InfoTec
        </h1>
        <h2>Olá {greeting}, Seja Bem-Vindo!!</h2>
         
        <ItemList />
      </>
    );
  }

  export default ItemListContainer;