import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../../App.css';

export const CartWidget = () => {
  return (
    <a className='botonCartWidget' href='/cart'>
        <ShoppingCartIcon />
    </a>
  )
}

export default CartWidget;
