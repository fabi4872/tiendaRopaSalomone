import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import '../../App.css';

const CartWidget = () => {
  const { qty } = useContext(CartContext);

  return (
    <>
      <div className="cart-container">
        { qty > 0 ? <p className="cart-cantidad">{qty}</p> : <p></p> } 
        <Link className="botonCartWidget" to={"/cart"}>
          <ShoppingCartIcon />
        </Link>
      </div>
    </>
  )
}

export default CartWidget;
