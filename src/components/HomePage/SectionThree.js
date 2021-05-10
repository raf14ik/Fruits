import React from 'react';
import CardFlip from './CardFlip';
import { Container } from 'react-bootstrap';
function SectionThree() {
  return (
    <div className="sectionThree">
      <Container fluid>
        <h3
          style={{
            textAlign: 'center',
            padding: '1rem 0 1rem 0',
            color: '#000',
            fontFamily: 'Lobster,cursive',
          }}
        >
          Example 1 : listes des produits
        </h3>
        <div className="list">
          <CardFlip />
        </div>
      </Container>
    </div>
  );
}

export default SectionThree;
