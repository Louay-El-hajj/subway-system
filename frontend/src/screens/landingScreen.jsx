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
  // const branches = [
  //   { coordinates: [33.8886, 35.4955], name: "Branch 1", address: "Address 1" },
  //   { coordinates: [33.8756, 35.6], name: "Branch 2", address: "Address 2" },
    
  // ];

 
  
  return (
    <div >
        <Hero/>
        <Section1/> 
        <Section2/>    
        <MapSection/>
        <Section3/> 
        <Section4/>
        <Footer/>
        
    </div>
  );
};

export default LandingScreen;





// "type": "FeatureCollection",
//     "query": [
//         "sidon"
//     ],
//     "features": [
//         {
//             "id": "place.174209",
//             "type": "Feature",
//             "place_type": [                "place"  ],
//             "relevance": 1,
//             "properties": {                "mapbox_id": "dXJuOm1ieHBsYzpBcWlC",               "wikidata": "Q163490"           },
//             "text": "صيدا",
//             "place_name": "صيدا, South, Lebanon",
//             "matching_text": "Sidon",
//             "matching_place_name": "Sidon, South, Lebanon",
//             "bbox": [
//                 35.2172255,
//                 33.320118,
//                 35.508835,
//                 33.6017036
//             ],
//             "center": [
//                 35.378034,
//                 33.561835
//             ],
//             "geometry": {
//                 "type": "Point",
//                 "coordinates": [
//                     35.378034,
//                     33.561835
//                 ]
//             },
//             "context": [
//                 {
//                     "id": "region.17537",
//                     "mapbox_id": "dXJuOm1ieHBsYzpSSUU",
//                     "wikidata": "Q223643",
//                     "short_code": "LB-JA",
//                     "text": "South"
//                 },
//                 {
//                     "id": "country.8833",
//                     "mapbox_id": "dXJuOm1ieHBsYzpJb0U",
//                     "wikidata": "Q822",
//                     "short_code": "lb",
//                     "text": "Lebanon"
//                 }
//             ]
//         }]