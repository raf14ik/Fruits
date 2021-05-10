import React from 'react';
import { Image, Col, Row, Card, CardDeck, Container } from 'react-bootstrap';
import stimage from '../../images/stimage.png';
function SectionOne() {
  return (
    <Container fluid className="sectionOne">
      <Row>
        <Col>
          <h3>N°1 des extraits de fruits en Afrique</h3>
        </Col>
      </Row>
      <Row>
        <Col sm={7}>
          <h2>On n'est jamais numéro 1 par hasard !</h2>
          <h4>
            Si nous sommes leader des boissons aux fruits aujourd'hui, c'est
            parce que nous nous démarquons grâce à :
          </h4>
          <CardDeck>
            <Card>
              <Card.Body>
                <Card.Text>NOS ENGAGEMENTS DU VERGER AU VERRE</Card.Text>
              </Card.Body>
            </Card>{' '}
            <Card>
              <Card.Body>
                <Card.Text>NOS EXTRAITS UNIQUES</Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Text>UNE ÉLABORATION MINUTIEUSE</Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Text>ET NOS COLLABORATEURS PASSIONNÉS</Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Col>
        <Col sm={5}>
          <Row>
            <Col>
              <Image src={stimage} roundedCircle />
            </Col>
            <Col sm={12}>
              <h5>
                Dans le développement de nos activités, nous nous attachons à
                <strong>
                  {' '}
                  promouvoir des modes de vie positifs et durables
                </strong>
                , dans le respect de l’environnement et des hommes.
              </h5>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default SectionOne;
