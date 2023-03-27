import React from "react";

import "./App.css";
import Home from "./pages/Home";
import WhoWeAre from "./pages/WhoWeAre";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import Enrollment from "./pages/Enrollment";
import PersonalInformation from "./pages/PersonalInformation";
import AddingProfile from "./pages/AddingProfile";



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/WhoWeAre" element={<WhoWeAre />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/enrollment" element={<Enrollment />} />
          <Route path="/PersonalInformation" element={<PersonalInformation />} />
          <Route path="/AddingProfile" element={<AddingProfile/>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
