import React from "react";
// import { Link } from 'react-router-dom';
import Hero from "./components/hero";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";

const HomePage = () => {
  return (
    <div>
        <Hero/>
        <Section1/> 
        <Section2/>    
        <Section3/> 
      {/* <footer>
        <p>&copy; 2024 Subway System. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default HomePage;
