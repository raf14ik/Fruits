import React from 'react';
import { Container } from 'react-bootstrap';
import { Carousel } from '3d-react-carousal';
import pr1 from '../../images/test1.png';
import pr2 from '../../images/test2.png';
import pr3 from '../../images/test3.png';

function SectionFive() {
  let slides = [
    <img src={pr1} alt="1" />,
    <img src={pr2} alt="2" />,
    <img src={pr1} alt="3" />,
    <img src={pr2} alt="4" />,
    <img src={pr3} alt="5" />,
  ];
  return (
    <div className="sectionFive">
      <Container fluid>
        <h3
          style={{
            textAlign: 'center',
            color: '#fff',
            marginBottom: '4rem',
          }}
        >
          Example 3: listes des produits
        </h3>
        <div
          data-aos="zoom-in-down"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
        >
          <Carousel
            data-aos="zoom-in-left"
            data-aos-duration="600"
            slides={slides}
            autoplay={false}
            interval={2000}
          />
        </div>
      </Container>
    </div>
  );
}

export default SectionFive;
