import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "../components/Item";
import Spinner from "../components/Spinner";
import products from '../components/Mock';
import { collection, getDocs, getFirestore } from "firebase/firestore"



function Produtos(){

    const [isLoading, setIsLoading] = useState(true);
    // const [data, setData] = useState([]);
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams();

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

    // useEffect( () => {
    //     getData(true)
    //         .then((retorno) => {
    //             setData(retorno);
    //         })
    //         .catch((retorno) => {
    //             console.error(retorno);
    //         })
    //         .finally(() => {
    //             setIsLoading(false);
    //         });
    // }, []);

    useEffect( () => {
        const db = getFirestore();
        getDocs(collection(db, "items"))
            .then((querySnapshot) => {
                const items = [];
                querySnapshot.forEach((item) => {
                    items.push({
                        id: item.id,
                        ...item.data(),
                    });
                    

                });

                return items;
            })
            .then((data) => setProducts(data))
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const filterProducts = categoryId ? products.filter((p) => p.categoryId === categoryId) : products;
    console.log(filterProducts, "filter")
    if (isLoading) {
        return <Spinner />;
    }

    return (
        <>  
            <Item item={filterProducts} />
 
        </>
    );
}

export default Produtos;