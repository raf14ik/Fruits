import React from 'react';
import Slider from '../components/HomePage/Slider';
import SectionOne from '../components/HomePage/SectionOne';
import SectionTwo from '../components/HomePage/SectionTwo';
import SectionThree from '../components/HomePage/SectionThree';
import SectionFour from '../components/HomePage/SectionFour';
import SectionFive from '../components/HomePage/SectionFive';
import SectionSix from '../components/HomePage/SectionSix';

function Home() {
  return (
    <div className="home">
      <Slider />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </div>
  );
}

export default Home;
