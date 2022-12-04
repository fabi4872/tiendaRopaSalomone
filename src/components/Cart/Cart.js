import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";
import { CartItem } from "../CartItem/CartItem";
import Formulario from "../Formulario/Formulario";
import "../../App.css";

export const Cart = () => {  
    const { cart, total, clear } = useContext(CartContext);

    return (
        <>
          {cart.length === 0 ? (
            <h1 className='titulo-detalle'>
              No hay productos en el carrito. Ir a <Link to={"/"}>HOME</Link>
            </h1>
            ) : (
            <>
              <h1 className='titulo-detalle'>
                Productos del carrito
              </h1>
              <main className="main">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="table-titulo">Identificador</th>
                      <th className="table-titulo">Título</th>
                      <th className="table-titulo">Cantidad</th>
                      <th className="table-titulo">Precio Unitario</th>
                      <th className="table-titulo">Subtotal</th>
                      <th className="table-titulo">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((prod) =>
                      <CartItem key={prod.id} id={prod.id} titulo={prod.title} cantidad={prod.cantidad} precioUnidad={prod.price} total={prod.price * prod.cantidad} />
                    )}
                  </tbody>
                </table>
              </main>              
              <div className="cart-totalVaciar">
                <p className="cart-total">Total: <span className="cart-total-negrita">ARS {total}</span></p>
                <button className="btn btn-danger" onClick={()=>clear()}>Vaciar carrito</button>
              </div>

              <div className='contenedorEmitirCompra'>
                  <div className='datosUsuario'>
                      <div className='divForm'>
                          <Formulario />
                      </div>
                  </div>
              </div>
            </>
          )}
        </>
    )
}