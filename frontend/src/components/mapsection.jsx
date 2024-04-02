import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

const MapSection = () => {
  const mapRef = useRef(null); // Ref to store the map instance
  const mapInitialized = useRef(false); // Flag to track if the map is initialized

  useEffect(() => {
    if (!mapInitialized.current) {
      // Create a map instance
      mapRef.current = L.map('mapid').setView([51.505, -0.09], 13);

      // Add a tile layer (for example, OpenStreetMap)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18,
      }).addTo(mapRef.current);

      // Add a marker
      L.marker([51.5, -0.09]).addTo(mapRef.current)
        .bindPopup('A popup for the marker.')
        .openPopup();

      mapInitialized.current = true; // Set flag to true after initialization
    }
  }, []); // Empty dependency array to run only once after the component is mounted

  return (
    <div>
      <div id="mapid" style={{ height: '400px' }}></div>
    </div>
  );
};

export default MapSection;
