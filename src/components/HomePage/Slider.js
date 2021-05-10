import React from 'react';
import { Carousel } from 'react-bootstrap';
import background from '../../images/background.jpg';
import background1 from '../../images/background1.jpg';

function slider() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={background} alt="First slide" />
        <Carousel.Caption>
          <h3>Leader des extraits de fruits</h3>
          <p>
            Et si être leader des extraits de fruits nous poussait chaque jour{' '}
            <br></br> à nous dépasser pour offrir le meilleur ?
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={background1} alt="Second slide" />
        <Carousel.Caption>
          <h3
            style={{
              color: '#000',
            }}
          >
            Leader des extraits de fruits
          </h3>
          <p
            style={{
              color: '#000',
            }}
          >
            Et si être leader des extraits de fruits nous poussait chaque jour{' '}
            <br></br> à nous dépasser pour offrir le meilleur ?
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default slider;
