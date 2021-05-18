import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

import cat5 from '../../images/categorie5.png';
import catback5 from '../../images/categoriebackground5.PNG';

import Arrow from '../../Arrow.js';

function SectionFive() {
  return (
    <div className="section">
      <Card style={{ textAlign: 'center', backgroundColor: '#00bfb3' }}>
        <Row>
          <Col sm={4}>
            <Card.Img
              src={catback5}
              alt="Card image"
              style={{ marginTop: '30%' }}
            />
          </Col>
          <Col sm={4}>
            <Card.Img src={cat5} alt="Card image" />
          </Col>
          <Col sm={4}>
            <Card.Body>
              <Card.Text
                style={{ fontSize: '1.5rem', marginTop: '40%', color: '#fff' }}
              >
                description .
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

export default SectionFive;
