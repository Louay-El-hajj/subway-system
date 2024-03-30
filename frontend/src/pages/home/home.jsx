import React from "react";
// import { Link } from 'react-router-dom';
import Hero from "./components/hero";
const HomePage = () => {
  return (
    <div>
        <Hero/>
        <section>
          <h2>Map</h2>
          {/* You can include a map component here for browsing branches and rides */}
        </section>
      
      <footer>
        <p>&copy; 2024 Subway System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
