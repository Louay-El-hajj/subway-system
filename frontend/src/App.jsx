
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingScreen from "./screens/landingScreen";
import AuthForm from "./components/AuthScreen/AuthForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingScreen/>} />
        <Route path="/aa" element={<AuthForm/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
