//import logo from './logo.svg';
import './App.css';
import { ComponentItemListContainer } from './Componentes/Contenedor/ItemListContainer';
import { ComponentNavbar } from './Componentes/Navbar/Navbar';
import { ComponentCartWidget } from './Componentes/CartWidget/CartWidget';
import ItemCount from './Componentes/ItemCount/ItemCount';

function App() {

  const tituloDePagina = "Tienda Ropa";
  const mensaje = "Toda tu ropa en un solo lugar";

  return (
    <>
      <ComponentNavbar titulo={tituloDePagina}>
        <ComponentCartWidget />
      </ComponentNavbar>
      <ComponentItemListContainer greeting={mensaje} />
    </>
  );
}

export default App;
