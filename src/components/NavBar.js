import "../styles/NavBar.css";
import CartWidget from "./CartWidget";

function NavBar(){
    return(
        <nav className="navbar">
            <ul>
                <li><a href="/" className="link">Home</a></li>
                <li><a href="/hardware" className="link">Hardware</a></li>
                <li><a href="/perifericos" className="link">Periféricos</a></li>
                <li><a href="/gabinetes" className="link">Gabinetes</a></li>
            </ul>
            <CartWidget />
        </nav>
    );
}

export default NavBar;