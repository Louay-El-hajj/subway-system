import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet'; 
import 'leaflet/dist/leaflet.css'; 
// import './style.css'; 

const MapSection = ({ branches }) => {
  const [map, setMap] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!map) {
      if (mapRef.current !== null) {
        mapRef.current.remove();
      }
      
      mapRef.current = L.map('map').setView([33.8547, 35.8623], 10); 

      const bounds = new L.LatLngBounds();
      branches.forEach(branch => bounds.extend(branch.coordinates));
    //   rides.forEach(ride => ride.path.forEach(coord => bounds.extend(coord)));

      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoicmFiaWgxMiIsImEiOiJjbHVqbzB3cjgwZG5qMmtwaGd6OHE2djg0In0.kDsXVw_gudRSA-0MGICxVw'
      }).addTo(mapRef.current);

      branches.forEach(branch => {
        L.marker(branch.coordinates).addTo(mapRef.current)
          .bindPopup(`<strong>${branch.name}</strong><br>${branch.address}`);
      });

    //   rides.forEach(ride => {
    //     L.polyline(ride.path, { color: 'red' }).addTo(mapRef.current)
    //       .bindPopup(`<strong>${ride.name}</strong><br>Distance: ${ride.distance} km`);
    //   });

      setMap(mapRef.current);
    } else {
        mapRef.current.eachLayer(layer =>{
            if (layer instanceof L.Polyline){
                mapRef.current.removeLayer(layer);
            }
        });
        if (branches.length >=2) {
            const branch1= branches[0].coordinates;
            const branch2= branches[1].coordinates;
            const path=[branch1,branch2];

            L.polyline(path, { color: 'red' }).addTo(mapRef.current)
            .bindPopup(`<strong>Path</strong><br>From: ${branches[0].name} To: ${branches[1].name}`);
       
        }
    }
  }, [branches, map]);

  return (
    <div style={{ height: '400px', width: '100%' }} id="map" />
  );
};

export default MapSection;
