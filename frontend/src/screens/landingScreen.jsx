import React from "react";
// import { Link } from 'react-router-dom';
import Hero from "../components/landingScreen/hero";
import Section1 from "../components/landingScreen/section1";
import Section2 from "../components/landingScreen/section2";
import Section3 from "../components/landingScreen/section3";
import Section4 from "../components/landingScreen/section4";
import Footer from "../components/landingScreen/footer";
import MapSection from "../components/mapsection";


const LandingScreen = () => {
  // Sample data for branches and rides
  const branches = [
    { coordinates: [33.8886, 35.4955], name: "Branch 1", address: "Address 1" },
    { coordinates: [33.8756, 35.5314], name: "Branch 2", address: "Address 2" },
    
  ];

  // const rides = [
  //   { path: [[33.8886, 35.4955], [33.8756, 35.5314]], name: "Ride 1", distance: 5 },   
  // ];

  
  return (
    <div >
        <Hero/>
        <Section1/> 
        <Section2/>    
        <MapSection branches={branches}  />
        <Section3/> 
        <Section4/>
        <Footer/>
        
    </div>
  );
};


export default LandingScreen;