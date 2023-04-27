import React from 'react';
import Creativity from '../components/creativity/Creativity';
import Header from '../components/header/Header';
import Info from '../components/info/Info';
import Services from '../components/services/Services';
import Solution from '../components/solution/Solution';

const Home = () => {
  return (
    <>
      <Header />
      <Solution />
      <Services />
      <Info />
      <Creativity />
    </>
  );
};

export default Home;
