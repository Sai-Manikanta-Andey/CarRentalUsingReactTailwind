import React from 'react'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Body from './Body'
import Hero from './Hero'

const Home = () => {
  return (
    <div className='py-20'>
      <Hero/>
      <Body/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home