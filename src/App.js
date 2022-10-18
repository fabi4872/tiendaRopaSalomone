import './App.css';
import { ComponentItemListContainer } from './Componentes/Contenedor/ItemListContainer';
import { ComponentNavbar } from './Componentes/Navbar/Navbar';
import { ComponentCartWidget } from './Componentes/CartWidget/CartWidget';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import Cart from './Componentes/Contenedor/CartView/Cart';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  const tituloDePagina = "Tienda Ropa";
  const mensaje = "Toda tu ropa en un solo lugar";

  return (
    <>
      <BrowserRouter>
        <ComponentNavbar titulo={tituloDePagina}>
          <ComponentCartWidget />
        </ComponentNavbar>
        <Routes>
          <Route path="/" element={<ComponentItemListContainer greeting={mensaje} />}/>
          <Route path="/categoria/:id" element={<ComponentItemListContainer greeting={mensaje} />}/>
          <Route path="/producto/:id" element={<ItemDetailContainer />}/>
          <Route path="/cart/" element={<Cart />}/>  
          <Route path="*" element={<ComponentItemListContainer greeting={mensaje}/>}/> {/* Ruta por defecto si se tipea una inexistente */}
        </Routes>  
      </BrowserRouter>
    </>
  );
}

export default App;