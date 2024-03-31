// import './App.css';
import LandingScreen from "./screens/landingScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
