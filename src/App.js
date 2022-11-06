import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';

function App() {
  const mensaje = "Las mejores ofertas en indumentaria masculina";

  return (
    <>
      <body className='body'>
        <NavBar>
          <CartWidget />
        </NavBar>
        <ItemListContainer greeting={ mensaje } />
      </body>
    </>
  );
}

export default App;
