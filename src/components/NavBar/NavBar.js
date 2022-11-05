import React from 'react';
import { styles } from './NavBar.styles';
import logo from "../../logo.png";

const NavBar = () => {
  const categorias = [
    { id:'0', path:'/categoria/Remeras', descripcion:'REMERAS' },
    { id:'1', path:'/categoria/Pantalones', descripcion:'PANTALONES' },
    { id:'2', path:'/categoria/Sweters', descripcion:'SWEATERS' },
    { id:'3', path:'/categoria/Camisas', descripcion:'CAMISAS' },
    { id:'4', path:'/categoria/Camperas', descripcion:'CAMPERAS' },
  ]

  return (
    <nav style={styles.nav}>
        <a style={styles.a} href='/Home'><img style={styles.logo} src={logo} alt='Imagen de logo' /></a>
        <ul style={styles.ul}>
          {
            categorias.map((categoria)=>{
              return <li style={styles.li}><a key={categoria.id} style={styles.a} href={categoria.path}>{categoria.descripcion}</a></li>
            })
          }
        </ul>
    </nav>
  )
}

export default NavBar;