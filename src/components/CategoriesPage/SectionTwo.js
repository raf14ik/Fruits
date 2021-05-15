import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import cat from '../../images/cat.jpg';
import Arrow from '../../Arrow.js';

function SectionTwo() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h3>Catégorie 2</h3>
        </Col>
      </Row>
      <hr />
      <Card className="bg-light text-white" style={{ textAlign: 'center' }}>
        <Row>
          <Col sm={5}>
            <Card.Img src={cat} alt="Card image" />
          </Col>
          <Col sm={7}>
            <Card.Body>
              <Card.Text style={{ color: '#000' }}>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>{' '}
              <Button href="/categorie-two" variant="primary">
                voir tous les catégories <Arrow />
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default SectionTwo;
