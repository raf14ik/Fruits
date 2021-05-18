import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

import cat3 from '../../images/categorie3.png';
import catback3 from '../../images/categoriebackground3.PNG';

import Arrow from '../../Arrow.js';

function SectionThree() {
  return (
    <div className="section">
      <Card style={{ textAlign: 'center', backgroundColor: '#0095c8' }}>
        <Row>
          <Col sm={4}>
            <Card.Img
              src={catback3}
              alt="Card image"
              style={{ marginTop: '30%' }}
            />
          </Col>
          <Col sm={4}>
            <Card.Img src={cat3} alt="Card image" />
          </Col>
          <Col sm={4}>
            <Card.Body>
              <Card.Text
                style={{ fontSize: '1.5rem', marginTop: '40%', color: '#fff' }}
              >
                Ce n'est pas de l'eau pétillante.
                <br></br>
                C'est{' '}
                <strong style={{ color: '#000' }}>
                  {' '}
                  l'eau fruit pétillante.
                </strong>
              </Card.Text>
              <Button href="/categorie-one" variant="danger">
                Voir plus <Arrow />
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default SectionThree;
