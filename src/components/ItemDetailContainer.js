import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";


function ItemDetailContainer() {
    const [ itemId, setItemId] = useState(0);


    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(itemId);
                reject("Problema na chamda ao DB");
            }, 2000);
        });
    }

    useEffect( () => {
        getItem()
            .then((retorno) =>{
                setItemId(retorno);
            })
            .catch((retorno) => {
                console.error(retorno);
            })
    }, []);

    const prod = [
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

    return <ItemDetail item={prod[itemId]}/>;


}

export default ItemDetailContainer;