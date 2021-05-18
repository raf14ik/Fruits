import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import cat from '../../images/cat.png';
import Arrow from '../../Arrow.js';

function SectionSix() {
  return (
    <div className="sectionSix">
      <Container fluid>
        <Card style={{ backgroundColor: '#17a2b8', textAlign: 'center' }}>
          <Row>
            <Col sm={5}>
              <Card.Img src={cat} alt="Card image" />
            </Col>
            <Col sm={7}>
              <Card.Body>
                <Card.Text style={{ color: '#000' }}>
                  Description de tous les catégories.
                </Card.Text>{' '}
                <Button href="/categories" variant="warning">
                  voir tous les catégories <Arrow />
                </Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
}

export default SectionSix;
