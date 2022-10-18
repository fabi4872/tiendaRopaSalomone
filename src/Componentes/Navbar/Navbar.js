import React from "react";
import logo from "../../assets/logo.png";

//bootstrap
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
        
const categoriasRopa = [
    { id: 1, nombre: "Ropa de hombre", ruta: "categoria/men's clothing"},
    { id: 2, nombre: "Ropa de mujer", ruta: "categoria/women's clothing" },
    { id: 3, nombre: "Joyeria", ruta: "categoria/jewelery"},
]
        
export const ComponentNavbar = ({ titulo, children }) => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <NavLink to="/"><img src={ logo } width="100" height="100" className="d-inline-block align-top" alt="Logo de pagina" /></NavLink>
                </Navbar.Brand>
                <Navbar.Brand>{titulo}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {categoriasRopa.map((categoria) => {
                            return <Nav.Link key={categoria.id}><NavLink to={ categoria.ruta }>{categoria.nombre}</NavLink></Nav.Link>
                        })}
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets"></Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            <NavLink to="/cart">
                                {children}
                            </NavLink>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}