import "../styles/CartWidget.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CartWidget (){
    const {totalItens} = useCart();
    
    if (totalItens !== 0){
        return (
            <span className="iconCar">
                <Link to="/cart" className="link">
                    {totalItens}
                    <i className="fa-solid fa-cart-shopping"></i>
                </Link>
            </span>
        );
    }
    
}

export default CartWidget;