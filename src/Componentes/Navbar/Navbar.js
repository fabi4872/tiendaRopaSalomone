import React from "react";
import logo from "../../assets/logo.png";

//bootstrap
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
        
const categoriasRopa = [
    { id: 1, nombre: "Calzado", ruta: "./index.html"},
    { id: 2, nombre: "Remeras", ruta: "./index.html"},
    { id: 3, nombre: "Pantalones", ruta: "./index.html"},
    { id: 4, nombre: "Relojes", ruta: "./index.html" },
]
        
export const ComponentNavbar = ({ titulo, children }) => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={ logo } width="150" height="100" className="d-inline-block align-top" alt="Logo de pagina" />
                </Navbar.Brand>
                <Navbar.Brand href="#">{titulo}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {categoriasRopa.map((categoria) => {
                            return <Nav.Link key={categoria.id} href={categoria.ruta}> {categoria.nombre}</Nav.Link>
                        })}
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets"></Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            {children}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}