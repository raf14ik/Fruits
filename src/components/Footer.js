import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Facebook, Instagram, Twitter, Youtube } from 'react-bootstrap-icons';
import Cup from '../Cup.js';

function Footer() {
  return (
    <div class="footer-dark">
      <Container fluid>
        <footer>
          <Row>
            <Col sm={6} md={3} className="item">
              <h3>Catégories</h3>
              <ul>
                <li>
                  <a>Web design</a>
                </li>
                <li>
                  <a>Development</a>
                </li>
                <li>
                  <a>Hosting</a>
                </li>
              </ul>
            </Col>
            <Col sm={6} md={3} className="item">
              <h3>Navigation</h3>
              <ul>
                <li>
                  <a href="/">Accueil</a>
                </li>
                <li>
                  <a href="/categories">Catégories</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </Col>
            <Col md={6} className="item text">
              <h3>
                <Cup /> Fruits
              </h3>
              <p>
                Dans le développement de nos activités, nous nous attachons à
                promouvoir des modes de vie positifs et durables, dans le
                respect de l’environnement et des hommes.
              </p>
            </Col>

            <Col className="item social">
              <a>
                <Youtube />
              </a>
              <a>
                <Facebook />
              </a>
              <a>
                <Twitter />
              </a>
              <a>
                <Instagram />
              </a>
            </Col>
          </Row>
          <p class="copyright">Copyright all rights reserved - Fruits © 2021</p>
        </footer>
      </Container>
    </div>
  );
}

export default Footer;
