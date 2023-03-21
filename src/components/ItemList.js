import { useEffect, useState } from 'react';
import Spinner from './Spinner';
import Item from "./Item";
// import products from './Mock';
import { collection, getDocs, getFirestore } from "firebase/firestore"

function ItemList( {items} ){
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState();

    // function getData(isSuccess = true) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             if (isSuccess) {
    //                 resolve(products);
    //             }

    //             reject("Problema na chamda ao DB");
    //         }, 2000);
    //     });
    // }

    useEffect( () => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");

        getDocs(itemsCollection)
            .then((snapshot) => {
                setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
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