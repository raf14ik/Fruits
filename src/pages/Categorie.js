import React from 'react';
import { Container } from 'react-bootstrap';

import SectionOne from '../components/CategoriesPage/SectionOne';
import SectionTwo from '../components/CategoriesPage/SectionTwo';
import SectionThree from '../components/CategoriesPage/SectionThree';
import SectionFour from '../components/CategoriesPage/SectionFour';
import SectionFive from '../components/CategoriesPage/SectionFive';
import SectionSix from '../components/CategoriesPage/SectionSix';
import SectionSeven from '../components/CategoriesPage/SectionSeven';

function Categorie() {
  return (
    <Container fluid style={{ marginTop: '5rem' }}>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
    </Container>
  );
}

export default Categorie;
