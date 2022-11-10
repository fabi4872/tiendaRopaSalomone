import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import ItemDetail from '../ItemDetail/ItemDetail';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import '../../App.css';

  const ItemDetailContainer = () => {
   const {id} = useParams();  
   const [producto, setProducto] = useState({});
   const [loading, setLoading] = useState(true);
 
   useEffect(()=>{
    setLoading(true)
    const querydb = getFirestore()
    const queryDoc = doc (querydb,'productos',id)
    getDoc(queryDoc)
      .then(res => setProducto({id:res.id, ...res.data()}))
    setLoading(false)
  },[id])

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
