import React, { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from "../CartContext/CartContext";
import { Link } from 'react-router-dom';
import '../../App.css';

const ItemDetail = ({producto}) => {
  const {addItem} = useContext(CartContext);
  const [showItemCount, setShowItemCount] = useState(true);
  const onAdd = (count) => {
    addItem(producto, count);
    console.log("Se agregan " + count + " unidades");
    setShowItemCount(false);
  }

  return (
    <>
      <article className='card'>
        <img className='card-imagen' src={producto.image} alt={producto.titulo} />
        <h5 className='card-titulo'>{producto.title}</h5>
        <p className='card-descripcion'>{producto.description}</p>
        <h5 className='card-precio'>Precio: ARS {producto.price}</h5>
      </article>

      <article className='card-count'>        
        {showItemCount ? ( 
            <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
        ) : (
            <>
              <Link className='card-boton' to = {'/cart'}>
                Finalizar compra
              </Link>            
            
              <Link className='card-boton-continuar' to = {'/'}>
                Continuar comprando
              </Link>     
            </>
        )}
      </article>
    </>
    
  )
}

export default ItemDetail;
