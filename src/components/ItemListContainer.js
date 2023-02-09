import ItemCount from "./ItemCount";
import Item from "./Item";
import ItemList from "./ItemList";

function ItemListContainer() {
    return(
      <>
        <h1 className="title">
            Meu e-Commerce
        </h1>
        <h2>Loja InfoTec</h2>
         
          <ItemList>
            {/* <Item /> */}
          </ItemList>
          <ItemCount stock={5} initial={1} />
      </>
    );
  }

  export default ItemListContainer;