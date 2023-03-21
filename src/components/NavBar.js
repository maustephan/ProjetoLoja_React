import "../styles/NavBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import React, {useEffect, useState} from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore"

function NavBar(){
    const [items, setItems] = useState([]);

    function getCategoriesFromFirestore() {
        getDocs(collection(getFirestore(), "categories"))
            .then((querySnapshot) => {
                const categories = [];
                querySnapshot.forEach((category) =>
                    categories.push({
                        id: category.id,
                        text: category.data().name,
                        link: `/category/${category.data().key}`,
                    })
                );
                return categories
            })
            .then(data => setItems(data))
            .catch((error) => console.error(error));
    }

    useEffect(() => {
        getCategoriesFromFirestore();
    }, []);

    return(
        <nav className="navbar">
            {/* <ul>
                <li><Link to="/" className="link">Home</Link></li>
                <li><Link to="/category/hardware" className="link">Hardware</Link></li>
                <li><Link to="/category/perifericos" className="link">Periféricos</Link></li>
                <li><Link to="/category/gabinetes" className="link">Gabinetes</Link></li>
                <li><Link to="/login" className="link">Login</Link></li>
            </ul> */}
            <ul>
                <li>
                    <Link to="/" className="link">Home</Link>
                    {items.map((i) => (
                        <Link key={i.id} as={Link} to={i.link} className="link">
                            {i.text}
                        </Link>
                    ))}
                    <Link to="/login" className="link">Login</Link>
                </li>
            </ul>
            <CartWidget />
        </nav>
    );
}

export default NavBar;