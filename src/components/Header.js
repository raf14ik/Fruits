import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../App.css';
import Cup from '../Cup.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

function header() {
  return (
    <div className="Header">
      <Navbar
        className="navbar-dark"
        expand="lg"
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <Navbar.Brand href="/" data-aos="fade-down">
          <Cup /> Fruits
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/" data-aos="fade-up">
              Accueil
            </Nav.Link>
            <Nav.Link href="/categories" data-aos="fade-down">
              Catégories
            </Nav.Link>
            <Nav.Link href="/contact" data-aos="fade-up">
              Contact{' '}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default header;
