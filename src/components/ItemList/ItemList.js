import React from 'react';
import Item from '../Item/Item';
import '../../App.css';

const ItemList = ({productos}) => {
  return (
    <>
      <section className='section-card'>
      {
        productos.map((producto)=>{
           return <Item key={producto.id} producto={producto}/>
        })
      }
      </section>
    </>
  )
}

export default ItemList;
