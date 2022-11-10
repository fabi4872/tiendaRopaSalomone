import React from 'react';
import { styles } from './NavBar.styles';
import { NavLink } from 'react-router-dom';
import logo from "../../logo.png";
import '../../App.css';

const NavBar = ({children}) => {
  const categorias = [
    { id:1, ruta:'/categoria/remeras', descripcion:'REMERAS' },
    { id:2, ruta:'/categoria/pantalones', descripcion:'PANTALONES' },
    { id:3, ruta:'/categoria/sweaters', descripcion:'SWEATERS' },
    { id:4, ruta:'/categoria/camisas', descripcion:'CAMISAS' }
  ]

  return (
    <nav style={styles.nav} className='nav'>
        <NavLink style={styles.a} to='/'><img style={styles.logo} src={logo} alt='Imagen de logo' /></NavLink>
        <ul style={styles.ul}>
            {
                categorias.map((categoria)=>{
                    return (
                        <li key={categoria.id} style={styles.li}>
                            <NavLink className='anchorNavBar' to={categoria.ruta}>{categoria.descripcion}</NavLink>
                        </li>
                    )
                })
            }
        </ul>
        {children}
    </nav>
  )
}

export default NavBar;
