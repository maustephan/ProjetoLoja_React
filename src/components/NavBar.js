import "../styles/NavBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <nav className="navbar">
            <ul>
                <li><Link to="/" className="link">Home</Link></li>
                <li><Link to="/category/hardware" className="link">Hardware</Link></li>
                <li><Link to="/category/perifericos" className="link">Periféricos</Link></li>
                <li><Link to="/category/gabinetes" className="link">Gabinetes</Link></li>
                <li><Link to="/login" className="link">Login</Link></li>
            </ul>
            <CartWidget />
        </nav>
    );
}

export default NavBar;