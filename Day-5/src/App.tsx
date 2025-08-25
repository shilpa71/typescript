import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ValueHandler from "./components/ValueHandler";
import UserProfile from "./components/UserProfile";

const App: React.FC = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#1d68b3ff" }}>
        Union & Intersection Types Demo
      </h1>
      <Router>
        <Routes>
          <Route path="/" element={<ValueHandler />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </Router>
      
    </div>
  );
};

export default App;
