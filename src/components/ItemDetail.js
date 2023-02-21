import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

function ItemDetail({ item }){
    
    function onAdd(quantityToAdd){
        if (quantityToAdd > 0){
            console.log(`Estou adicionando ${quantityToAdd} do item`);
        }
    }

    return (
        <>  
            <div>
                <img src={item.pictureUrl} alt="" />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p>{item.category}</p>
                <h3>R${item.price}</h3>
                <ItemCount onConfirm={onAdd} initial={1} stock={5} />
                {/* <Link to="/cart" state={{ some: quantityToAdd }} /> */}
            </div>
        </>
    );
}

export default ItemDetail;