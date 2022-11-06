import React from 'react';
import '../../App.css';

const Item = ({producto}) => {
  return (
    <article className='card'>
        <img className='card-imagen' src={producto.image} alt={producto.titulo} />
        <h5 className='card-titulo'>{producto.title}</h5>
        <p className='card-descripcion'>{producto.description}</p>
        <h5 className='card-precio'>Precio: USD {producto.price}</h5>
        <button className='card-boton' type='button'>Ver detalles</button>
    </article>
  )
}

export default Item;
