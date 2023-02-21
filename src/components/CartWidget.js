import "../styles/CartWidget.css";
import { Link } from "react-router-dom";

function CartWidget (){
    return (
        <span className="iconCar">
            <Link to="/cart" className="link">
                <i className="fa-solid fa-cart-shopping"></i>
            </Link>
        </span>
    );
}

export default CartWidget;