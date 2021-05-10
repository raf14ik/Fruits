import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { CardGroup, Card, Button } from 'react-bootstrap';
import image1 from '../../images/1.jpg';
import image2 from '../../images/2.jpg';
import image3 from '../../images/3.jpg';
import image4 from '../../images/4.jpg';
import image5 from '../../images/5.jpg';
import image6 from '../../images/6.jpg';
import image7 from '../../images/7.jpg';
import image8 from '../../images/8.jpg';

function CardFlip() {
  return (
    <div>
      <CardGroup>
        <Card>
          <Flippy flipOnHover={true} flipDirection="horizontal">
            <FrontSide>
              <Card.Img variant="top" src={image1} />
            </FrontSide>
            <BackSide style={{ backgroundColor: '#131313', color: '#fff' }}>
              <Card.Title>Description</Card.Title>
              <Card.Body>
                <Card.Title> Card Title </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="info">Info</Button>
              </Card.Body>
            </BackSide>
          </Flippy>
        </Card>
        <Card>
          <Flippy flipOnHover={true} flipDirection="horizontal">
            <FrontSide>
              <Card.Img variant="top" src={image2} />
            </FrontSide>
            <BackSide style={{ backgroundColor: '#131313', color: '#fff' }}>
              <Card.Title>Description</Card.Title>
              <Card.Body>
                <Card.Title> Card Title </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="info">Info</Button>
              </Card.Body>
            </BackSide>
          </Flippy>
        </Card>
        <Card>
          <Flippy flipOnHover={true} flipDirection="horizontal">
            <FrontSide>
              <Card.Img variant="top" src={image3} />
            </FrontSide>
            <BackSide style={{ backgroundColor: '#131313', color: '#fff' }}>
              <Card.Title>Description</Card.Title>
              <Card.Body>
                <Card.Title> Card Title </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="info">Info</Button>
              </Card.Body>
            </BackSide>
          </Flippy>
        </Card>

        <Card>
          <Flippy flipOnHover={true} flipDirection="horizontal">
            <FrontSide>
              <Card.Img variant="top" src={image4} />
            </FrontSide>
            <BackSide style={{ backgroundColor: '#131313', color: '#fff' }}>
              <Card.Title>Description</Card.Title>
              <Card.Body>
                <Card.Title> Card Title </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="info">Info</Button>
              </Card.Body>
            </BackSide>
          </Flippy>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card>
          <Flippy flipOnHover={true} flipDirection="horizontal">
            <FrontSide>
              <Card.Img variant="top" src={image5} />
            </FrontSide>
            <BackSide style={{ backgroundColor: '#131313', color: '#fff' }}>
              <Card.Title>Description</Card.Title>
              <Card.Body>
                <Card.Title> Card Title </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="info">Info</Button>
              </Card.Body>
            </BackSide>
          </Flippy>
        </Card>
        <Card>
          <Flippy flipOnHover={true} flipDirection="horizontal">
            <FrontSide>
              <Card.Img variant="top" src={image6} />
            </FrontSide>
            <BackSide style={{ backgroundColor: '#131313', color: '#fff' }}>
              <Card.Title>Description</Card.Title>
              <Card.Body>
                <Card.Title> Card Title </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="info">Info</Button>
              </Card.Body>
            </BackSide>
          </Flippy>
        </Card>
        <Card>
          <Flippy flipOnHover={true} flipDirection="horizontal">
            <FrontSide>
              <Card.Img variant="top" src={image7} />
            </FrontSide>
            <BackSide style={{ backgroundColor: '#131313', color: '#fff' }}>
              <Card.Title>Description</Card.Title>
              <Card.Body>
                <Card.Title> Card Title </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="info">Info</Button>
              </Card.Body>
            </BackSide>
          </Flippy>
        </Card>
        <Card>
          <Flippy flipOnHover={true} flipDirection="horizontal">
            <FrontSide>
              <Card.Img variant="top" src={image8} />
            </FrontSide>
            <BackSide style={{ backgroundColor: '#131313', color: '#fff' }}>
              <Card.Title>Description</Card.Title>
              <Card.Body>
                <Card.Title> Card Title </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="info">Info</Button>
              </Card.Body>
            </BackSide>
          </Flippy>
        </Card>
      </CardGroup>
    </div>
  );
}

export default CardFlip;
