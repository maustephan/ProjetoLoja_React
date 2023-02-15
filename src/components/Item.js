import "../styles/Item.css";

function Item( {item} ){

    return (
        <>
            {console.log(item, "item.js - products")}
            {item.length > 0 && (
                <div>
                    <ul className="prateleira">
                        {item.map((d) => (
                            <li key={d.id} className='produto'>
                                <img src={d.pictureUrl} alt="Imagens dos Produtos"/>
                                <h3>{d.title}</h3>
                                <a href={`/produtos/${d.id}`}>{d.description}</a>
                                <p>R${d.price}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
    
}

export default Item;