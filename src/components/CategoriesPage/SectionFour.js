import React from 'react';
import {
  Card,
  Button,
  Row,
  Col,
  Popover,
  OverlayTrigger,
} from 'react-bootstrap';

import cat4 from '../../images/categorie4.png';
import catback4 from '../../images/categoriebackground4.PNG';

import Arrow from '../../Arrow.js';

const popover = (
  <Popover id="popover-basic">
    <Popover.Content
      style={{
        fontSize: '1rem',
        color: '#000',
        textAlign: 'center',
      }}
    >
      Jus de bleuts Slim.<br></br>
      Splash de multifruit Slim.<br></br>
      Cocktail de limonade Slim.<br></br>
      Slim Panthère rose.<br></br>
    </Popover.Content>
  </Popover>
);

function SectionFour() {
  return (
    <div className="section">
      <Card style={{ textAlign: 'center', backgroundColor: '#dc3545' }}>
        <Row>
          <Col sm={4}>
            <Card.Img
              src={catback4}
              alt="Card image"
              style={{ marginTop: '15%' }}
            />
          </Col>
          <Col sm={4}>
            <Card.Img src={cat4} alt="Card image" />
          </Col>
          <Col sm={4}>
            <Card.Body>
              <Card.Text
                style={{ fontSize: '1.5rem', marginTop: '10%', color: '#fff' }}
              >
                Seulement 10 calories par portion. <br></br> Seulement 1 gramme
                du sucre. <br></br> <strong>Sans </strong>aspartame. <br></br>
                Disponible en 5 délicieuses saveurs.
              </Card.Text>
              <Button href="/categorie-one" variant="dark">
                Voir plus <Arrow />
              </Button>
            </Card.Body>
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={popover}
            >
              <Button variant="info">Recettes de cocktails Slim</Button>
            </OverlayTrigger>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default SectionFour;
