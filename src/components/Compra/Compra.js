import React, { useContext } from "react";
import { ContextCompra } from "../CompraContext/CompraContext";
import "../../App.css";

export const Compra = () => {
   const { compra, totalCompra } = useContext(ContextCompra);
 
   const lista = [...compra];
   console.log("lista " + lista);

   return <>
   <h1 className="success">¡ Felicitaciones por su compra !</h1>
   <div>
       {
           compra.map((producto) => { 
               return (
                   <div>
                           <h5>Producto: {producto.title}</h5>
                           <p>Precio: ARS {producto.price}</p>
                           <p>Cantidad: {producto.cantidad}</p>
                   </div>
               )
           })
       }
   </div>
   <h4>Precio abonado: ARS {totalCompra}</h4>
</>
}