import React from 'react'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Body from './Body'
import Hero from './Hero'
import Companies from './Companies'

const Home = () => {
  return (
    <div className="pt-20 ">
      <Hero />
      <Companies />
      <Body />
      <About />
      <Contact />
      
    </div>
  );
}

export default Home