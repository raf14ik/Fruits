import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../App.css';
import Cup from '../Cup.js';
function header() {
  return (
    <div className="Header">
      <Navbar className="navbar-dark" expand="lg">
        <Navbar.Brand href="/">
          <Cup /> Fruits
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="/categories">Catégories</Nav.Link>
            <Nav.Link href="/contact">Contact </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default header;
