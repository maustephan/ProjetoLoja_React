import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";


function ItemCount({ stock, initial, onAdd}){

    const [counter, setCounter] = useState(initial);

    const stylesFonts = {
        textAlign: 'center',
        marginLeft: '10px',
        marginRight: '10px',
        fontSize: '25px'        
    }

    return(
        <div>
            <div style={{
                display:'inline-block',
                width: '150px',
                borderStyle: 'solid',
                borderColor: 'gray',
                borderWidth: '1px'
            }}>
                <FontAwesomeIcon 
                    icon={faMinus} 
                    style={stylesFonts}
                    onClick={ () => {
                        if (counter !== initial){
                            setCounter((aumentaProduto) => aumentaProduto - 1);
                        }
                    }}
                />
                <span style={{
                    fontSize:'25px', 
                    marginLeft:'20px', 
                    marginRight: '20px',
                    fontFamily:'monospace'
                }}>{counter}</span>
                <FontAwesomeIcon 
                    icon={faPlus} 
                    style={stylesFonts}
                    onClick={ () => {
                        if (counter !== stock) {
                            setCounter((diminuiProduto) => diminuiProduto + 1);
                        }
                    }} 
                />
            </div>
            <p><button>Adicionar Carrinho</button></p>
        </div>
    );

}

export default ItemCount;