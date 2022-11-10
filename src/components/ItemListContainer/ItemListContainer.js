import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import '../../App.css';

const ItemListContainer = ({greeting}) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  function filtrarData(query){
    getDocs(query).then(res => {
      setProductos( res.docs.map(producto  => ({id:producto.id, ...producto.data()})))
    })
  }

  useEffect(()=>{
    setLoading(true);

    const querydb = getFirestore()
    const queryCollection = collection(querydb, 'productos')
    
    if (id) {
      const queryFilter = query(queryCollection, where('category','==', id))
  
      filtrarData(queryFilter)
    }            
    else {
      filtrarData(queryCollection)
    }
    
    setLoading(false)
  }, [id]); 

  return (
    <>
      <h1 className='titulo-detalle'>{greeting}</h1>
      <main className='main'>
        {loading ? <Loading /> : <ItemList productos={productos} />}
      </main>
    </>
  )
}

export default ItemListContainer;
