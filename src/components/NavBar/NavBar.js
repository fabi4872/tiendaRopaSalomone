import React from 'react';
import { styles } from './NavBar.styles';
import logo from "../../logo.png";
import '../../App.css';

const NavBar = ({ children }) => {
  const categorias = [
    { id:'1', ruta:'/categoria/Remeras', descripcion:'REMERAS' },
    { id:'2', ruta:'/categoria/Pantalones', descripcion:'PANTALONES' },
    { id:'3', ruta:'/categoria/Sweters', descripcion:'SWEATERS' },
    { id:'4', ruta:'/categoria/Camisas', descripcion:'CAMISAS' },
    { id:'5', ruta:'/categoria/Camperas', descripcion:'CAMPERAS' },
  ]

  return (
    <nav style={styles.nav}>
        <a style={styles.a} href='/Home'><img style={styles.logo} src={logo} alt='Imagen de logo' /></a>
        <ul style={styles.ul}>
            {
                categorias.map((categoria)=>{
                    return (
                        <li key={categoria.id} style={styles.li}>
                            <a className='anchorNavBar' href={categoria.ruta}>{categoria.descripcion}</a>
                        </li>
                    )
                })
            }
        </ul>
        { children }
    </nav>
  )
}

export default NavBar;