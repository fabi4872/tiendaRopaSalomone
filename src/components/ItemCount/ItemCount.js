import React, { useState } from "react";

const ItemCount = ( { stock, initial, onAdd } ) => {
    const [contador, setContador] = useState(initial); //se reinicia el contador con el valor que esta entre parentesis

    const handlerClickSumar = () => {
        if (contador < stock ) {
            setContador(contador + 1); //manera de sumar de a 1 al estados "contador"            
        }
    }

    const handlerClickRestar = () => {
        if (contador > initial) {
            setContador(contador - 1); //manera de sumar de a 1 al estados "contador"
        }
    }

    const handlerClickReset = () => {
        setContador(initial); //manera de sumar de a 1 al estados "contador"
    }

    return ( 
        <div>
            <h2>{ contador }</h2>
            <button className="btn btn-primary" onClick={handlerClickRestar}>-</button>{' '}
            <button className="btn btn-primary" onClick={handlerClickSumar}>+</button>{' '}
            <button className="btn btn-danger" onClick={handlerClickReset}>Reset</button>{' '}
            <button className="btn btn-secondary" disabled={stock === 0} onClick={()=>onAdd(contador)}>
                <span>{stock === 0 ? 'No tenemos stock' : 'Agregar al carrito'}</span> 
            </button>
        </div> 
    )
} 

export default ItemCount;
