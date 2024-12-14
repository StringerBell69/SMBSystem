import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Pricing />
      <Contact />
    </>
  );
};

export default Home;