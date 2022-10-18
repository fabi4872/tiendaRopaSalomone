import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList/ItemList";

export const ComponentItemListContainer = ({ greeting }) => {

    //siguiendo la clase de coder
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
  
    const URL_BASE = 'https://fakestoreapi.com/products';
    const URL_CAT = `${URL_BASE}/category/${id}`;
  
    useEffect(()=>{
      const getProducts = async () => {
        try {
          const res = await fetch(id ? URL_CAT : URL_BASE);
          const data = await res.json(); 
          setProducts(data);      
        } catch (error) {
          console.log(error);      
        } finally {
          setLoading(false);
        }
      };
      getProducts();
    },[id]);
    
    return (
      <>
        {
          <>
            { loading ? <h1>Cargando ....</h1> : <ItemList products={products} title={greeting} /> }
          </>
        }
      </>
    )
}