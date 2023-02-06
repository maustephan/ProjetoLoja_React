import ItemCount from "./ItemCount";

function ItemListContainer() {
    return(
      <>
        <h1 className="title">
            Meu e-Commerce
        </h1>
        <h2>Loja InfoTec</h2>
        <ItemCount stock={5} initial={1} />
      </>
    );
  }

  export default ItemListContainer;