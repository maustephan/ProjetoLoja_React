import { useEffect, useState } from 'react';
import Spinner from './Spinner';
import Item from "./Item";
import products from './Mock';

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

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <>  
            <Item item={products} />
        </>
    );
    
};

export default ItemList;