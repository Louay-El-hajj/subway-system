import React from "react";
// import { Link } from 'react-router-dom';
import Hero from "../pages/home/components/hero";
import Section1 from "../pages/home/components/section1";
import Section2 from "../pages/home/components/section2";
import Section3 from "../pages/home/components/section3";
import Section4 from "../pages/home/components/section4";

const HomePage = () => {
  return (
    <div >
        <Hero/>
        <Section1/> 
        <Section2/>    
        <Section3/> 
        <Section4/>
      {/* <footer>
        <p>&copy; 2024 Subway System. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default HomePage;
