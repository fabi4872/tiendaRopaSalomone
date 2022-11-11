import React from "react";
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import { Cart } from './components/Cart/Cart';
import { CartContextProvide } from './components/CartContext/CartContext';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CompraContextProvide } from "./components/CompraContext/CompraContext";
import { Compra } from "./components/Compra/Compra";
import './App.css';

function App() {
  const titulo = "Las mejores ofertas";

  return (
    <>
      <BrowserRouter>
        <CompraContextProvide>
          <CartContextProvide>
            <NavBar>
              <CartWidget />
            </NavBar>
            <Routes>
              <Route path="/" element={<ItemListContainer greeting={titulo} />} />
              <Route path="/categoria/:id" element={<ItemListContainer greeting={titulo} />} />
              <Route path="/producto/:id" element={<ItemDetailContainer />} />
              <Route path="/cart/" element={<Cart />} />
              <Route path="/compra/" element={<Compra />} />
              <Route path="*" element={<ItemListContainer greeting={titulo} />} />
            </Routes>
          </CartContextProvide>
        </CompraContextProvide>
      </BrowserRouter>
    </>
  );
}

export default App;
