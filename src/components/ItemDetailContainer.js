import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
// import products from "./Mock";
import Spinner from "./Spinner";
import { getFirestore, doc, getDoc } from "firebase/firestore"


function ItemDetailContainer() {
        // const {id} = useParams();
        const params = useParams();
        const [isLoading, setIsLoading] = useState(true);
        const [produto, setProduto] = useState([]);
    
        // const getData = (isSuccess = true) => {
        //     return new Promise((resolve, reject) => {
        //         setTimeout(() => {
        //             if (isSuccess) {
        //                 resolve(products);

        //             }
        //             reject("Problema na chamda ao DB");
        //         }, 1000);
        //     });
        // }

        useEffect( () => {
            getDoc(doc(getFirestore(), "items", `${params.id}`))
                .then((querySnapshot) => {
                    if (querySnapshot.exists()) {
                        const item = {
                            id: querySnapshot.id,
                            ...querySnapshot.data(),
                        };
                        return item;
                    }
                })
                .then((data) => setProduto(data))
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
        
        if (produto) {
            
            return <ItemDetail item={produto}/>
            
        }
        
        return <p>Produto não encontrado</p>

   
}

export default ItemDetailContainer;