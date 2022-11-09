import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";
import { CartItem } from "../CartItem/CartItem";

export const Cart = () => {
    const { cart, total } = useContext(CartContext);

    return (
        <>
          {cart.length === 0 ? (
            <h1>
                No hay productos en el carrito. Ir a <Link to={"/"}>HOME</Link>
            </h1>
            ) : (
            <>
                {cart.map((prod) => 
                  <CartItem id={prod.id} titulo={prod.title} cantidad={prod.cantidad} precioUnidad={prod.price} total={prod.price * prod.cantidad}/>)}
            </>
          )}
          <span>Total carrito: {total}</span>
        </>
    )
}