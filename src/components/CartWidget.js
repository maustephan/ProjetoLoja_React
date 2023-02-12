import "../styles/CartWidget.css";

function CartWidget (){
    return (
        <span className="iconCar">
            <a href="#car">
                <i className="fa-solid fa-cart-shopping"></i>
            </a>
        </span>
    );
}

export default CartWidget;