import React from 'react';
import { Container, CardGroup, Card, Image, Button } from 'react-bootstrap';
import pr1 from '../../images/test1.png';
import pr2 from '../../images/test2.png';
import pr3 from '../../images/test3.png';
import Arrow from '../../Arrow.js';

function SectionFour() {
  return (
    <div className="sectionFour">
      <Container fluid>
        <h3
          style={{
            textAlign: 'center',
            color: '#000',
          }}
        >
          Example 2: listes des produits
        </h3>
        <CardGroup style={{ justifyContent: 'center' }}>
          <div className="example">
            <Image src={pr1} fluid />
            <Card
              className="exampleFruit"
              style={{
                width: '20rem',
                backgroundColor: '#242175',
                borderRadius: '50%',
                zIndex: '-1',
                boxShadow: '0 20px 20px rgba(0,0,0,0.2), 0px 0px 50px black',
              }}
            >
              <Card.Body style={{ textAlign: 'center' }}>
                <Card.Text
                  style={{ color: '#fff', color: '#fff', marginTop: '4rem' }}
                >
                  Fruits Snacks
                </Card.Text>
                <Button variant="primary">
                  voir produit <Arrow />
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="example" style={{ justifyContent: 'center' }}>
            <Image src={pr2} fluid />
            <Card
              className="exampleFruit"
              style={{
                width: '20rem',
                backgroundColor: '#ff403b',
                borderRadius: '50%',
                zIndex: '-1',
                boxShadow: '0 20px 20px rgba(0,0,0,0.2), 0px 0px 50px black',
              }}
            >
              <Card.Body style={{ textAlign: 'center' }}>
                <Card.Text style={{ color: '#fff', marginTop: '4rem' }}>
                  Fruit'n Yougurt
                </Card.Text>
                <Button variant="primary">
                  voir produit <Arrow />
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="example" style={{ justifyContent: 'center' }}>
            <Image src={pr3} fluid />
            <Card
              className="exampleFruit"
              style={{
                width: '20rem',
                backgroundColor: '#ff5588',
                borderRadius: '50%',
                zIndex: '-1',
                boxShadow: '0 20px 20px rgba(0,0,0,0.2), 0px 0px 50px black',
              }}
            >
              <Card.Body style={{ textAlign: 'center' }}>
                <Card.Text style={{ color: '#fff', marginTop: '4rem' }}>
                  JuiceFuls
                </Card.Text>
                <Button variant="primary">
                  voir produit <Arrow />
                </Button>
              </Card.Body>
            </Card>
          </div>
        </CardGroup>
      </Container>
    </div>
  );
}

export default SectionFour;
