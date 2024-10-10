import React from 'react';
import Skip from '../components/Skip';
import Header from '../components/Header';
import Main from '../components/Main';
import Intro from '../components/Intro';
import Ability from '../components/Ability';
import Site from '../components/Site';
import Project from '../components/Project';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomeView=()=>{
  return(
    <div>
      <Skip />
      <Header />
      <Main>
        <Intro />
        <Ability />
        <Site />
        <Project />
        <Contact />
      </Main>
      <Footer />
    </div>
  )
}

export default HomeView;