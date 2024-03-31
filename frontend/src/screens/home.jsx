import React from "react";
// import { Link } from 'react-router-dom';
import Hero from "../pages/home/components/hero";
import Section1 from "../pages/home/components/section1";
import Section2 from "../pages/home/components/section2";
import Section3 from "../pages/home/components/section3";
import Section4 from "../pages/home/components/section4";
import Footer from "../pages/home/components/footer";

const HomePage = () => {
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

export default HomePage;
