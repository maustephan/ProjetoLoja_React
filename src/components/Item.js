import "../styles/Item.css";
import { Link } from "react-router-dom";

function Item( {item} ){
    const formater = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})

    return (
        <>
            {item.length > 0 && (
                <div>
                    <ul className="prateleira">
                        {item.map((d) => (
                            <li key={d.id} className='produto'>
                                <img src={d.imageUrl} alt="Imagens dos Produtos"/>
                                <h4 style={{fontSize:"22px"}}>{d.title}</h4>
                                <Link to={`/produtos/${d.id}`} style={{
                                    color:"black"
                                }}>{d.description}</Link>
                                <p>{formater.format(d.price)}</p>
                                {/* <p>Quantidade em estoque:{d.stock}</p> */}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
    
}

export default Item;