import "../styles/NavBar.css";
import CartWidget from "./CartWidget";

function NavBar(){
    return(
        <nav className="navbar">
            <ul>
                <li><a href="#home" className="link">Home</a></li>
                <li><a href="#categoria" className="link">Categorias</a></li>
                <li><a href="#quemsomos" className="link">Quem Somos</a></li>
                <li><a href="#Contato" className="link">Contato</a></li>
            </ul>
            <CartWidget />
        </nav>
    );
}

export default NavBar;