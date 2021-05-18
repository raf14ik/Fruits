import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

import cat7 from '../../images/categorie7.png';
import catback7 from '../../images/categoriebackground7.PNG';

import Arrow from '../../Arrow.js';

function SectionSeven() {
  return (
    <div className="section">
      <Card style={{ textAlign: 'center', backgroundColor: '#ff914d' }}>
        <Row>
          <Col sm={4}>
            <Card.Img
              src={catback7}
              alt="Card image"
              style={{ marginTop: '20%' }}
            />
          </Col>
          <Col sm={4}>
            <Card.Img src={cat7} alt="Card image" />
          </Col>
          <Col sm={4}>
            <Card.Body>
              <Card.Text
                style={{ fontSize: '1.5rem', marginTop: '25%', color: '#000' }}
              >
                <strong>Incontournables</strong> <br></br>
                Une palette colorée de saveurs où nos pommes sont associées à
                d’autres fruits tout aussi savoureux dans des desserts.
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

export default SectionSeven;
