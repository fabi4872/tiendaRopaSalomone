import React from "react";

//para bootstrap
import Badge from 'react-bootstrap/Badge'; 


export const ComponentItemListContainer = ({ greeting }) => {
    return  <h3>
                { greeting } <Badge bg="secondary">En construcción</Badge>
            </h3>
}