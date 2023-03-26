import React from "react";

import "./App.css";
import Home from "./pages/Home";
import WhoWeAre from "./pages/WhoWeAre";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/WhoWeAre" element={<WhoWeAre />} />
          <Route path="/LoginPage" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
