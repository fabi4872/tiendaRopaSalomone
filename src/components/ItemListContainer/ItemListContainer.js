import React from 'react';
import '../../App.css';

export const ItemListContainer = ({ greeting }) => {
  return (
    <main className='main'>
        <h1>{ greeting }</h1>
    </main>
  )
}

export default ItemListContainer;
