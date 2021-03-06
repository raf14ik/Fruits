import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

import cat1 from '../../images/categorie1.png';
import catback1 from '../../images/categoriebackground1.PNG';

import Arrow from '../../Arrow.js';

function SectionOne() {
  return (
    <div className="section">
      <Card style={{ textAlign: 'center', backgroundColor: '#9321c8' }}>
        <Row>
          <Col sm={4}>
            <Card.Img
              src={catback1}
              alt="Card image"
              style={{ marginTop: '20%' }}
            />
          </Col>
          <Col sm={4}>
            <Card.Img src={cat1} alt="Card image" />
          </Col>
          <Col sm={4}>
            <Card.Body>
              <Card.Text
                style={{ fontSize: '1.5rem', marginTop: '25%', color: '#fff' }}
              >
                description.
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

export default SectionOne;
