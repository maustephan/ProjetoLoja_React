import ItemCount from "./ItemCount";
import Item from "./Item";
import ItemList from "./ItemList";

function ItemListContainer({ greeting }) {
    return(
      <>
        <h1 className="title">
          Loja InfoTec
        </h1>
        <h2>Olá {greeting}, Seja Bem-Vindo!!</h2>
         
          <ItemList >
            
          </ItemList>
            <ItemCount stock={5} initial={1} />
      </>
    );
  }

  export default ItemListContainer;