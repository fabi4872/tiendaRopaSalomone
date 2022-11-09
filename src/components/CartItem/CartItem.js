import React,  { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";

export const CartItem = ({id, titulo, cantidad, precioUnidad, total}) => {

    //me quedo con lo que necesito
    const { deleteItem } = useContext(CartContext);

    return (
        <ul>
            <li>Producto: {titulo}</li>
            <li>Cantidad: {cantidad}</li>
            <li>Precio unitario: {precioUnidad}</li>
            <li>Total precio: {total}</li>
            <button onClick={()=> deleteItem(id)}>Eliminar producto</button>
        </ul>
    )
}
