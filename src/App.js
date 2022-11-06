import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const titulo = "Las mejores ofertas";

  return (
    <>
      <BrowserRouter>
        <NavBar>
          <CartWidget />
        </NavBar>
        <Routes>
          <Route path="/home" element={<ItemListContainer greeting={titulo} />} />
          <Route path="/categoria/:id" element={<ItemListContainer greeting={titulo} />} />
          <Route path="*" element={<ItemListContainer greeting={titulo} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
