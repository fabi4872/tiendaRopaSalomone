import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import Badge from 'react-bootstrap/Badge'; 

export const ComponentItemListContainer = ({ greeting }) => {
    const onAdd = (count) =>{
        console.log(`El usuario agregó ${count} productos.`);
    }

    
    return (
        <>
            <h3>
                {greeting} <Badge bg="secondary"></Badge>
            </h3>
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
        </>
    );
}
