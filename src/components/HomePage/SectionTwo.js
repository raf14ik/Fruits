import React from 'react';
import { Container, Row, Col, CardGroup, Card } from 'react-bootstrap';
import philo1 from '../../images/philo1.png';
import philo2 from '../../images/philo2.png';
import philo3 from '../../images/philo3.png';
import philo4 from '../../images/philo4.png';
import hover1 from '../../images/hover1.png';
import hover2 from '../../images/hover2.png';
import hover3 from '../../images/hover3.png';
import hover4 from '../../images/hover4.png';

function SectionTwo() {
  return (
    <div className="sectionTwo">
      <Container fluid>
        <Row>
          <Col>
            <h3>Notre fruitlosophie</h3>
          </Col>
        </Row>
        <CardGroup>
          <Card
            data-aos="flip-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="400"
          >
            <Card.Img
              variant="top"
              src={philo1}
              onMouseOver={e => (e.currentTarget.src = hover1)}
              onMouseOut={e => (e.currentTarget.src = philo1)}
            />
          </Card>
          <Card
            data-aos="flip-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="400"
          >
            <Card.Img
              variant="top"
              src={philo2}
              onMouseOver={e => (e.currentTarget.src = hover2)}
              onMouseOut={e => (e.currentTarget.src = philo2)}
            />
          </Card>
          <Card
            data-aos="flip-down"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="400"
          >
            <Card.Img
              variant="top"
              src={philo3}
              onMouseOver={e => (e.currentTarget.src = hover3)}
              onMouseOut={e => (e.currentTarget.src = philo3)}
            />
          </Card>
          <Card
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="400"
          >
            <Card.Img
              variant="top"
              src={philo4}
              onMouseOver={e => (e.currentTarget.src = hover4)}
              onMouseOut={e => (e.currentTarget.src = philo4)}
            />
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
}

export default SectionTwo;
