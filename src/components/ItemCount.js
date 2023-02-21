import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


function ItemCount({ initial, stock, onConfirm, onAdd}){

    const [counter, setCounter] = useState(initial);    
    
    const stylesFonts = {
        textAlign: 'center',
        marginLeft: '10px',
        marginRight: '10px',
        fontSize: '25px'        
    }
        
    function handleClick() {
        onConfirm(counter);
    }

    function handleDecrement() {
        setCounter((p) => Math.max(p - 1, 1))
    }

    function handleIncrement() {
        setCounter((p)=> Math.min(p + 1, stock));
        
    }

    return(
        <>
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
                    onClick={handleDecrement}
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
                    onClick={handleIncrement} 
                />
            
            <p><button onClick={handleClick}>Adicionar Carrinho</button></p>
            <button>
                Finalizar Compra
            </button>
            </div>
        </>
    );

}

export default ItemCount;