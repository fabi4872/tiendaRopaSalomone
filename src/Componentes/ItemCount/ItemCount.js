import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

const ItemCount = ( {initial, stock, onAdd} ) =>{
    // const [usuarioNpmbre, setUsuarioNombre] = useState("");
    // const [usuarios, setUsuarios] = useState([]);
    // const [usuario, setUsuario] = useState({});

    const [count, setCount] = useState(initial);
    const handlerClickSumar = () =>{
        if(count < stock){
            setCount(count + 1);
        }
    }
    const handlerClickRestar = () =>{
        if(count > initial){
            setCount(count - 1);
        }
    }
    const handlerClickResetear = () =>{
        setCount(initial);
    }

    return (
        <div>
            <Button variant="primary" onClick={handlerClickRestar}>-</Button>{' '}
            <h1>{count}</h1>
            <Button variant="primary" onClick={handlerClickSumar}>+</Button>{' '}
            <Button variant="danger" onClick={handlerClickResetear}>Resetear</Button>{' '}
            <Button variant="info" onClick={() => onAdd(count)}>Agregar al carrito</Button>{' '}
        </div>
    );
}

export default ItemCount;