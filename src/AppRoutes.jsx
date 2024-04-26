import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import SignupPage from "./pages/SignupPage/SignupPage.jsx";
import OTPPage from "./pages/OTPPage/OTPPage.jsx";
import CharacterSelectPage from "./pages/CharacterSelectPage/CharacterSelectPage.jsx";
 import CongratsPage from "./pages/CongratsPage/CongratsPage.jsx";

function AppRoutes(){
  return (
    <Router>
      <Routes>
        <Route path="/experience" element={<App />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/otp" element={<OTPPage />} />
        <Route path="/characterSelect" element={<CharacterSelectPage />} />
         <Route path="/congrats" element={<CongratsPage />} /> 
      </Routes>
    </Router>
  );
};

export default AppRoutes;