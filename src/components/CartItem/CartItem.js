import React,  { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { red } from "@mui/material/colors";
import "../../App.css";

export const CartItem = ({id, titulo, cantidad, precioUnidad, total}) => {

    //me quedo con lo que necesito
    const { deleteItem } = useContext(CartContext);

    return (
        <tr>
            <td className="table-info">#{id}</td>
            <td className="table-info">{titulo}</td>
            <td className="table-info">{cantidad}</td>
            <td className="table-info">ARS {precioUnidad}</td>
            <td className="table-info">ARS {total}</td>
            <td className="table-info">
                <button className="cart-item-delete" onClick={()=> deleteItem(id)}><DeleteForeverIcon sx={{ color: red[600] }}/></button>
            </td>
        </tr>
    )
}
