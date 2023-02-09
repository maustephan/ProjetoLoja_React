import "../styles/ItemList.css";
import { useEffect, useState } from 'react';
import Spinner from './Spinner';

function ItemList( {items} ){
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    function getData(isSuccess = true) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (isSuccess) {
                    resolve(products);
                }

                reject("Problema na chamda ao DB");
            }, 2000);
        });
    }

    useEffect( () => {
        getData(true)
            .then((retorno) => {
                setData(retorno);
            })
            .catch((retorno) => {
                console.error(retorno);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const products = [
        { id: 1, title: "COMPUTADOR", description: "Computador It is a long established ", price: 2200, pictureUrl: 'https://picsum.photos/200///'},
        { id: 2, title: "HD", description: "Hd It is a long established ", price: 200, pictureUrl: 'https://picsum.photos/200////'},
        { id: 3,title: "MOUSE", description: "Mouse It is a long established ", price: 60, pictureUrl: 'https://picsum.photos/200/////'},
        { id: 4, title: "TECLADO GAMER", description: "Teclado Gamer It is a long established ", price: 170, pictureUrl: 'https://picsum.photos/200//////'},
        { id: 5,title: "MONITOR", description: "Monitor It is a long established ", price: 1999, pictureUrl: 'https://picsum.photos/200///////'}
    ];

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <>

            {data.length > 0 && (
                <div className="prateleira">
                    <ul>
                        {data.map((d) => (
                            <li key={d.id} className='produto'>
                                <h3>{d.title}</h3>
                                <img src={d.pictureUrl} />
                                <a href="#">{d.description}</a>
                                <p>R${d.price}</p>
                                
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
    
};

export default ItemList;