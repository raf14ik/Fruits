import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import cat from '../../images/cat.jpg';
import Arrow from '../../Arrow.js';

function SectionSix() {
  return (
    <div className="sectionSix">
      <Container fluid>
        <Card className="bg-dark text-white" style={{ textAlign: 'center' }}>
          <Card.Img src={cat} alt="Card image" />
          <Card.ImgOverlay style={{ top: '20%' }}>
            <Card.Text style={{ color: '#000' }}>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>{' '}
            <Button variant="primary">
              voir tous les catégories <Arrow />
            </Button>
          </Card.ImgOverlay>
        </Card>
      </Container>
    </div>
  );
}

export default SectionSix;
