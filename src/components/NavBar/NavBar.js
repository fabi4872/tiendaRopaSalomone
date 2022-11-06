import React from 'react';
import { styles } from './NavBar.styles';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../logo.png";
import '../../App.css';

const NavBar = ({children}) => {
  const categorias = [
    // { id:1, ruta:'/categoria/Remeras', descripcion:'REMERAS' },
    // { id:2, ruta:'/categoria/Pantalones', descripcion:'PANTALONES' },
    // { id:3, ruta:'/categoria/Sweters', descripcion:'SWEATERS' },
    // { id:4, ruta:'/categoria/Camisas', descripcion:'CAMISAS' },
    // { id:5, ruta:'/categoria/Camperas', descripcion:'CAMPERAS' },
    { id: 1, descripcion: "ELECTRONICA", ruta: "/categoria/electronics"},
    { id: 2, descripcion: "JOYERIA", ruta: "categoria/jewelery"},
    { id: 3, descripcion: "ROPA DE HOMBRE", ruta: "categoria/men's clothing"},
    { id: 4, descripcion: "ROPA DE MUJER", ruta: "categoria/women's clothing"},
  ]

  return (
    <nav style={styles.nav} className='nav'>
        <NavLink style={styles.a} to='/Home'><img style={styles.logo} src={logo} alt='Imagen de logo' /></NavLink>
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