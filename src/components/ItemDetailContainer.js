import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import products from "./Mock";
import Spinner from "./Spinner";


function ItemDetailContainer() {
        const {id} = useParams();
        const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    
        const getData = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(products);
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
    
        if (isLoading) {
            return <Spinner />;
        }

        return (
            <>
                <ItemDetail item={products[id]}/>
            </>
        );

   
}

export default ItemDetailContainer;