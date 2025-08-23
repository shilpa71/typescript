import React from "react";
import EmployeeList from "./EmployeeList";
import "../styles/Home.css";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h2>Welcome to Employee Management</h2>
      <p>Manage employees with Add, Edit, and Delete options.</p>
      <EmployeeList />
    </div>
  );
};

export default Home;

