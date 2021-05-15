import React from 'react';
import { Container } from 'react-bootstrap';

import SectionOne from '../components/CategoriesPage/SectionOne';
import SectionTwo from '../components/CategoriesPage/SectionTwo';

function Categorie() {
  return (
    <Container fluid style={{ marginTop: '5rem' }}>
      <SectionOne />
      <SectionTwo />
    </Container>
  );
}

export default Categorie;
