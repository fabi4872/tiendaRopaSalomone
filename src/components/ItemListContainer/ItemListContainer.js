import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';
import { useParams } from "react-router-dom";
import '../../App.css';

const ItemListContainer = ({greeting}) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  //Armado de ruta
  const URL_BASE = 'https://fakestoreapi.com/products';
  const URL_CAT = `${URL_BASE}/category/${id}`;

  useEffect(()=>{
    const obtenerProductos = async () => {
      try {
        const respuesta = await fetch(id ? URL_CAT : URL_BASE);
        const data = await respuesta.json(); 
        setProductos(data);      
      } catch (error) {
        console.log(error);      
      } finally {
        setLoading(false);
      }
    };
    obtenerProductos();
  },[id]);

  return (
    <main className='main'>
      <>
        {
          <>
            {loading ? <Loading /> : <ItemList productos={productos} titulo={greeting} />}
          </>
        }
      </>
    </main>
  )
}

export default ItemListContainer;
