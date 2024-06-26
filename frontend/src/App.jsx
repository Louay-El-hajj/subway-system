
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingScreen from "./screens/landingScreen";
import AuthForm from "./components/AuthScreen/AuthForm";
import UserProfile from "./components/UserProfile";
import Orders from "./pages/order/Orders";
import TicketListingPage from "./test/TicketListingpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route exact path="/orders" element={<Orders />} />
        <Route exact path="/tickets" element={<TicketListingPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
