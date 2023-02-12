import { useEffect, useState } from 'react';
import Spinner from './Spinner';
import Item from "./Item";
import ItemDetail from './ItemDetail';
import ItemDetailContainer from './ItemDetailContainer';

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
        { id: 1, title: "PROCESSADOR", description: "Computador It is a long established ", category:"Hardware", price: 2200, pictureUrl: 'https://picsum.photos/200'},
        { id: 2, title: "HD", description: "Hd It is a long established ", category:"Hardware", price: 200, pictureUrl: 'https://picsum.photos/200/'},
        { id: 3,title: "MOUSE", description: "Mouse It is a long established ", category:"Periféricos", price: 60, pictureUrl: 'https://picsum.photos/200//'},
        { id: 4, title: "TECLADO GAMER", description: "Teclado Gamer It is a long established ", category:"Periféricos", price: 170, pictureUrl: 'https://picsum.photos/200///'},
        { id: 5,title: "MEMORIA", description: "Monitor It is a long established ", category:"Hardware", price: 1999, pictureUrl: 'https://picsum.photos/200////'},
        { id: 6, title: "Placa Mãe", description: "Computador It is a long established ", category:"Hardware", price: 2200, pictureUrl: 'https://picsum.photos/200/////'},
        { id: 7, title: "HD SSD", description: "Hd It is a long established ", category:"Hardware", price: 200, pictureUrl: 'https://picsum.photos/200//////'},
        { id: 8,title: "GABINETE XPTO", description: "Mouse It is a long established ", category:"Gabinetes", price: 60, pictureUrl: 'https://picsum.photos/200///////'},
        { id: 9, title: "MICROFONE", description: "Teclado Gamer It is a long established ", category:"Periféricos", price: 170, pictureUrl: 'https://picsum.photos/200////////'},
        { id: 10, title: "GABINETE COOL", description: "Teclado Gamer It is a long established ", category:"Gabinetes", price: 170, pictureUrl: 'https://picsum.photos/200/////////'},
        { id: 11,title: "CAIXA DE SOM", description: "Monitor It is a long established ", category:"Periféricos", price: 1999, pictureUrl: 'https://picsum.photos/200//////////'}
    ];

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <>
        <Item item={products} />
        <ItemDetailContainer />
        </>

    //         {data.length > 0 && (
    //             <div className="prateleira">
    //                 <ul>
    //                     {data.map((d) => (
    //                         <li key={d.id} className='produto'>
    //                             <h3>{d.title}</h3>
    //                             <img src={d.pictureUrl} />
    //                             <a href="#">{d.description}</a>
    //                             <p>R${d.price}</p>
                                
    //                         </li>
    //                     ))}
    //                 </ul>
    //             </div>
    //         )}
    //     </>
    );
    
};

export default ItemList;