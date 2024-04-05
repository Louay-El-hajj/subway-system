
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingScreen from "./screens/landingScreen";
import AuthForm from "./components/AuthScreen/AuthForm";
import UserProfile from "./components/UserProfile";
import "./styles/landingScreen/section2.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
