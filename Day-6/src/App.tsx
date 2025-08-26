import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IdentityComponent from "./components/IdentityComponent";
import ArrayWrapperComponent from "./components/ArrayWrapperComponent";
import "./styles/App.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <h1>✨ Generics in TypeScript ✨</h1>
      <Router>
        <Routes>
          <Route path="/" element={<IdentityComponent />} />
          <Route path="/array-wrapper" element={<ArrayWrapperComponent />} />
          </Routes>
          </Router>
    </div>
  );
};

export default App;
