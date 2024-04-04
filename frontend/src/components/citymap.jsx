// // CityMapComponent.jsx
// import React, { useState } from "react";
// import MapSection from "./mapsection";
// import axios from "axios";

// const CityMap= () => {
//   const [cityName, setCityName] = useState("");
//   const [cityCoordinates, setCityCoordinates] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.get(
//         `https://api.mapbox.com/geocoding/v5/mapbox.places/${cityName}.json?access_token=YOUR_MAPBOX_ACCESS_TOKEN`
//       );
//       const features = response.data.features;
//       if (features.length > 0) {
//         const coordinates = features[0].geometry.coordinates;
//         setCityCoordinates(coordinates);
//       } else {
//         alert("City not found");
//       }
//     } catch (error) {
//       console.error("Error fetching city coordinates:", error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={cityName}
//           onChange={(e) => setCityName(e.target.value)}
//           placeholder="Enter city name"
//         />
//         <button type="submit">Search</button>
//       </form>
//       {cityCoordinates && (
//         <MapSection
//           branches={[{ coordinates: cityCoordinates, name: cityName, address: "" }]}
//         />
//       )}
//     </div>
//   );
// };

// export default CityMap;


import React, { useState } from "react";
import MapSection from "./mapsection";
import axios from "axios";

const CityMap = () => {
  const [cityName1, setCityName1] = useState("");
  const [cityName2, setCityName2] = useState("");
  const [cityCoordinates1, setCityCoordinates1] = useState(null);
  const [cityCoordinates2, setCityCoordinates2] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response1 = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${cityName1}.json?access_token=pk.eyJ1IjoicmFiaWgxMiIsImEiOiJjbHVqbzB3cjgwZG5qMmtwaGd6OHE2djg0In0.kDsXVw_gudRSA-0MGICxVw`
      );
      const response2 = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${cityName2}.json?access_token=pk.eyJ1IjoicmFiaWgxMiIsImEiOiJjbHVqbzB3cjgwZG5qMmtwaGd6OHE2djg0In0.kDsXVw_gudRSA-0MGICxVw`
      );
      const features1 = response1.data.features;
      const features2 = response2.data.features;

      if (features1.length > 0 && features2.length > 0) {
        const coordinates1 = features1[0].geometry.coordinates;
        const coordinates2 = features2[0].geometry.coordinates;
        setCityCoordinates1(coordinates1);
        setCityCoordinates2(coordinates2);
      } else {
        alert("City not found");
      }
    } catch (error) {
      console.error("Error fetching city coordinates:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={cityName1}
          onChange={(e) => setCityName1(e.target.value)}
          placeholder="Enter city 1 name"
        />
        <input
          type="text"
          value={cityName2}
          onChange={(e) => setCityName2(e.target.value)}
          placeholder="Enter city 2 name"
        />
        <button type="submit">Search</button>
      </form>
      {cityCoordinates1 && cityCoordinates2 && (
        <MapSection
          branches={[
            { coordinates: cityCoordinates1, name: cityName1, address: "" },
            { coordinates: cityCoordinates2, name: cityName2, address: "" }
          ]}
        />
      )}
    </div>
  );
};

// export default CityMap;
