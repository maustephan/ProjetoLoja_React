import ItemCount from "./ItemCount";
import React, { useContext } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function ItemDetail({ item }){
    const {addToCart, isInCart} = useCart();
    const navigate = useNavigate();
    const formater = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})

    // function onAdd(quantityToAdd){
    //     if (quantityToAdd > 0){
    //         console.log(`Estou adicionando ${quantityToAdd} do item`);
    //     }
    // }

    function handleAdd(valor){
        addToCart(
            // [item.id, item.title, item.price, valor]
            {id: item.id, produto: item.title, preço: item.price, quantidade:valor}
        );
        navigate("/cart");

    }

    function getAction() {
        return isInCart(item.title) ? (
                <>
                    <h4>O produto já está no carrinho!!!</h4>
                    <Link to="/cart"><button>Ir para o carrinho</button></Link>
                </>
            ) : (
                <ItemCount onAdd={handleAdd} initial={1} stock={item.stock} />
            );
    }

    return (
        <>  
            <div>
                <img src={item.imageUrl} alt="Foto do produto" />
                <h2>{item.title}</h2>   
                <p>{item.description}</p>
                <p>{item.category}</p>
                <h3>{formater.format(item.price)}</h3>
                <p>Quantidade em estoque: {item.stock}</p>
                {getAction()}
                
            </div>
        </>
    );
}

export default ItemDetail;