import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

import cat2 from '../../images/categorie2.png';
import catback2 from '../../images/categoriebackground2.PNG';

import Arrow from '../../Arrow.js';

function SectionTwo() {
  return (
    <div className="section">
      <Card style={{ textAlign: 'center', backgroundColor: '#ff8d6f' }}>
        <Row>
          <Col sm={4}>
            <Card.Img
              src={catback2}
              alt="Card image"
              style={{ marginTop: '20%' }}
            />
          </Col>
          <Col sm={4}>
            <Card.Img src={cat2} alt="Card image" />
          </Col>
          <Col sm={4}>
            <Card.Body>
              <Card.Text
                style={{ fontSize: '1.5rem', marginTop: '30%', color: '#000' }}
              >
                POUR SE FAIRE PLAISIR, RETROUVEZ L'AUTHENTICITÃ‰ DU FRUIT AVEC LA
                GAMME FRUIS.
              </Card.Text>
              <Button href="/categorie-one" variant="light">
                Voir plus <Arrow />
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default SectionTwo;
