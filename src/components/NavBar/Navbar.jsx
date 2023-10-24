import React from "react";
import "./navbar.css"
import CartWidget from "../CartWidget/CartWidget";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar  = () => {
  return (
    <>
      <h1 className="titulo">Bienvenido a Frulicius 🍎 </h1>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Inicio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Ofertas ⚡</Nav.Link>
            <Nav.Link href="#features">Frutas 🍊</Nav.Link>
            <Nav.Link href="#pricing">Verduras 🥕</Nav.Link>
          </Nav>
        </Container>
        <CartWidget/>
      </Navbar>
    </>
  );
  }
  


export default NavBar

