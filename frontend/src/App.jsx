// import './App.css';
// import BuyTicket from "./screens/cardKey";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingScreen from "./screens/landingScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingScreen/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
