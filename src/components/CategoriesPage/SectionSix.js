import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

import cat6 from '../../images/categorie6.png';
import catback6 from '../../images/categoriebackground6.PNG';

import Arrow from '../../Arrow.js';

function SectionSix() {
  return (
    <div className="section">
      <Card style={{ textAlign: 'center', backgroundColor: '#28a745' }}>
        <Row>
          <Col sm={4}>
            <Card.Img
              src={catback6}
              alt="Card image"
              style={{ marginTop: '20%' }}
            />
          </Col>
          <Col sm={4}>
            <Card.Img src={cat6} alt="Card image" />
          </Col>
          <Col sm={4}>
            <Card.Body>
              <Card.Text
                style={{ fontSize: '1.5rem', marginTop: '30%', color: '#fff' }}
              >
                Idéal pour la réalisation de desserts faciles et rapides à
                préparer.
              </Card.Text>
              <Button href="/categorie-one" variant="warning">
                Voir plus <Arrow />
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default SectionSix;
