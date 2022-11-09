import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../../App.css';

const CartWidget = () => {
  const { qty } = useContext(CartContext);

  return (
    <>
      <p>{ qty }</p>
      <div className='botonCartWidget'>
        <ShoppingCartIcon />
      </div>
    </>
  )
}

export default CartWidget;
