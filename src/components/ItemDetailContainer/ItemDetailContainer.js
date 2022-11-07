import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import ItemDetail from '../ItemDetail/ItemDetail';
import '../../App.css';

const ItemDetailContainer = () => {
   const {id} = useParams();  
   const [producto, setProducto] = useState({});
   const [loading, setLoading] = useState(true);
 
   useEffect(()=>{
     setLoading(true);

     const obtenerProductos = async () => {
       try {
         const respuesta = await fetch("https://fakestoreapi.com/products/" + id);
         const data = await respuesta.json(); 
         setProducto(data);     
       } catch (error) {
         console.log(error);      
       } finally {
         setLoading(false);
       }
     };
     obtenerProductos();
  },[]);

  return (
    <>
      <h1 className='titulo-detalle'>Detalle de producto</h1>
      <section className='section-card'>
        {loading ? <Loading /> : <ItemDetail producto={producto} />}
      </section>
    </>
  )
}

export default ItemDetailContainer;
