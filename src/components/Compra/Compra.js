import React, { useContext } from "react";
import { ContextCompra } from "../CompraContext/CompraContext";
import "../../App.css";

export const Compra = () => {
   const { compra } = useContext(ContextCompra);

    return <>
        <h1 className='titulo-detalle'>
            Compras
        </h1>
        <main className="main">
            <table className="table">
                <thead>
                    <tr>
                        <th className="table-titulo">Identificador</th>
                        <th className="table-titulo">Nombre</th>
                        <th className="table-titulo">Apellido</th>
                        <th className="table-titulo">Email</th>
                        <th className="table-titulo">Localidad</th>
                        <th className="table-titulo">Código Postal</th>
                        <th className="table-titulo">Dirección</th>
                        <th className="table-titulo">Teléfono</th>
                    </tr>
                </thead>
                <tbody>
                    {compra.map((producto) =>
                      <tr key={producto.id}>
                        <td className="table-info">{producto.id}</td>
                        <td className="table-info">{producto.comprador.nombre}</td>
                        <td className="table-info">{producto.comprador.apellido}</td>
                        <td className="table-info">{producto.comprador.email}</td>
                        <td className="table-info">{producto.comprador.localidad}</td>
                        <td className="table-info">{producto.comprador.codigoPostal}</td>
                        <td className="table-info">{producto.comprador.direccion}</td>
                        <td className="table-info">{producto.comprador.telefono}</td>
                      </tr>
                    )}
                </tbody>
            </table>
        </main>
    </>
}