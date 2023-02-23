import ItemCount from "./ItemCount";
import React, { useContext } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function ItemDetail({ item }){
    const {addToCart} = useCart();
    const navigate = useNavigate();

    // function onAdd(quantityToAdd){
    //     if (quantityToAdd > 0){
    //         console.log(`Estou adicionando ${quantityToAdd} do item`);
    //     }
    // }

    function handleAdd(valor){
        addToCart(
            [item.id, item.title, item.price, valor]
        );
        navigate("/cart");

    }

    return (
        <>  
            <div>
                <img src={item.pictureUrl} alt="Foto do produto" />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p>{item.category}</p>
                <h3>R${item.price}</h3>
                <ItemCount onAdd={handleAdd} initial={1} stock={item.stock} />
            </div>
        </>
    );
}

export default ItemDetail;