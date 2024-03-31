import React from "react";
// import { Link } from 'react-router-dom';
import Hero from "../components/landingScreen/components/hero";
import Section1 from "../components/landingScreen/components/section1";
import Section2 from "../components/landingScreen/components/section2";
import Section3 from "../components/landingScreen/components/section3";
import Section4 from "../components/landingScreen/components/section4";
import Footer from "../components/landingScreen/components/footer";

const LandingScreen = () => {

  return (
    <div >
        <Hero/>
        <Section1/> 
        <Section2/>    
        <Section3/> 
        <Section4/>
        <Footer/>
    </div>
  );
};


export default LandingScreen;