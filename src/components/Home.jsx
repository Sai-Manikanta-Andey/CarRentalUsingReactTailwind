import React from 'react'
import About from './About'
import Contact from './Contact'
import Hero from './Hero'
import Companies from './Companies'
import { lazy,Suspense } from "react";
import Loading from './Loading'
const Body = lazy(() => import("./Body"));

const Home = () => {
  return (
    <div className="pt-20 ">
      <Hero />
      <Companies />
      <Suspense fallback={<Loading/>}>
        <Body />
      </Suspense>
      <About />
      <Contact />
    </div>
  );
}

export default Home