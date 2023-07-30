import "./styles.css";
// frontend/src/api.js
import "./output.css";
import Header from "./components/Header";

import axios from "axios";
import About from "./components/About";
import { Route, BrowserRouter, Routes } from "react-router-dom";

// Import the Pages
import DonationPage from "./pages/DonationPage";
import SignupPage from "./pages/SignUpPage";
import Homepage from "./pages/Homepage_1";
// Set the base URL for your backend API
const API_BASE_URL = "http://localhost:5000/api";

export const fetchUserData = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};

// Other API functions
// ...

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="sign-up" element={<SignupPage />} />
          <Route path="donation" element={<DonationPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
