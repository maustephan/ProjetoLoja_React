import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "../components/Item";
import Spinner from "../components/Spinner";
import products from '../components/Mock';


function Produtos(){

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const {category} = useParams();

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
            <Item item={products.filter(element => element.category === category)} />
        </>
    );
}

export default Produtos;