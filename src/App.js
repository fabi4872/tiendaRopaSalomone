import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import './App.css';

function App() {
  return (
    <>
      <NavBar>
        <CartWidget />
      </NavBar>
    </>
  );
}

export default App;
