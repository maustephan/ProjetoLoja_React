import "../styles/NavBar.css";

function NavBar(){
    return(
        <nav className="navbar">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#categoria">Categorias</a></li>
                <li><a href="#quemsomos">Quem Somos</a></li>
                <li><a href="#Contato">Contato</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;