// import React from "react";
// import { useState } from "react";
// // import { Link } from 'react-router-dom';
// import "../../styles/landingScreen/section3.css";
// // import FAB from "../fab";

// const Section3 = () => {
//   const [depCity, setDepCity] = useState("Beirut");
//   const [ariCity, setAriCity] = useState("Saida");
//   const [depTime, setDepTime] = useState("");
//   const [ariTime, setAriTime] = useState("");

//   const handleSearch = () => {
//     // Handle search functionality here, e.g., navigate to search results page
//     console.log("Departure City:", depCity);
//     console.log("Arrival City:", ariCity);
//     console.log("Departure Time:", depTime);
//     console.log("Arrival Time:", ariTime);
//   };
//   return (
    
//       <div id="section3" className="section3">
//         <div className="section3-container1">
//           <h4>Buy Your Ticket</h4>
//           <div className="section3-container1-1">
//             <div className="container1-1-1">
//               <div className="section3-from">
//                 <img src="/imgs/location-icon.png" alt="" />
//                 <select name="" id="depCity" className="section3-select">
//                   <option value="Beirut">Beirut</option>
//                 </select>
//               </div>
//               <div className="section3-to">
//                 <img src="/imgs/location-icon.png" alt="" />
//                 <select name="" id="ariCity" className="section3-select">
//                   <option value="Saida">Saida</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//               <hr className="line" />
//           <div className="section3-container1-2">
//             <div className="section3-depart">
//               <img src="/imgs/calendar-icon.png" alt="" />
//               <select name="" id="depTime" className="section3-select">
//                 <option value="Depart">Depart</option>
//               </select>
//             </div>
//             <div className="section3-arrive">
//               <img src="/imgs/calendar-icon.png" alt="" />
//               <select name="" id="ariTime" className="section3-select">
//                 <option value="Arrive">Arrive</option>
//               </select>
//             </div>
//           </div>
//         </div>
//         <div className="section3-container2">
//           <img src="/imgs/search-icon2.png" alt="" />
//         </div>
//         {/* <FAB/> */}
//       </div>
    
//   );
// };

// export default Section3;


import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import "../../styles/landingScreen/section3.css";
// import FAB from "../fab";

const Section3 = () => {
  const [depCity, setDepCity] = useState("Beirut");
  const [ariCity, setAriCity] = useState("Saida");
  const [depTime, setDepTime] = useState("");
  const [ariTime, setAriTime] = useState("");

  const handleSearch = () => {
    // Handle search functionality here, e.g., navigate to search results page
    console.log("Departure City:", depCity);
    console.log("Arrival City:", ariCity);
    console.log("Departure Time:", depTime);
    console.log("Arrival Time:", ariTime);
  };

  return (
    <div id="section3" className="section3">
      <div className="section3-container1">
        <h4>Buy Your Ticket</h4>
        <div className="section3-container1-1">
          <div className="container1-1-1">
            <div className="section3-from">
              <img src="/imgs/location-icon.png" alt="" />
              <select
                value={depCity}
                onChange={(e) => setDepCity(e.target.value)}
                className="section3-select"
              >
                <option value="Beirut">Beirut</option>
                {/* Add other city options here */}
              </select>
            </div>
            <div className="section3-to">
              <img src="/imgs/location-icon.png" alt="" />
              <select
                value={ariCity}
                onChange={(e) => setAriCity(e.target.value)}
                className="section3-select"
              >
                <option value="Saida">Saida</option>
                {/* Add other city options here */}
              </select>
            </div>
          </div>
        </div>
        <hr className="line" />
        <div className="section3-container1-2">
          <div className="section3-depart">
            <img src="/imgs/calendar-icon.png" alt="" />
            <input
              type="date"
              value={depTime}
              onChange={(e) => setDepTime(e.target.value)}
              className="section3-select"
            />
          </div>
          <div className="section3-arrive">
            <img src="/imgs/calendar-icon.png" alt="" />
            <input
              type="date"
              value={ariTime}
              onChange={(e) => setAriTime(e.target.value)}
              className="section3-select"
            />
          </div>
        </div>
      </div>
      <div className="section3-container2">
        <button onClick={handleSearch}>
          <img src="/imgs/search-icon2.png" alt="" />
        </button>
      </div>
      {/* <FAB/> */}
    </div>
  );
};

export default Section3;

