import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const Item = ({producto}) => {
  return (
    <article className='card'>
        <img className='card-imagen' src={producto.image} alt={producto.titulo} />
        <h5 className='card-titulo'>{producto.title}</h5>
        <p className='card-descripcion'>{producto.description}</p>
        <h5 className='card-precio'>Precio: ARS {producto.price}</h5>
        <Link className='card-boton' type='button' to={'/producto/' + producto.id}>Ver detalles</Link>
    </article>
  )
}

export default Item;
