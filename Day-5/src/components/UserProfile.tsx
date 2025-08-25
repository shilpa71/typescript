import React from "react";
import "../styles/UserProfile.css";

// intersection types
interface User {
  name: string;
  age: number;
}

interface Address {
  city: string;
  country: string;
}

type UserProfileType = User & Address;

const UserProfile: React.FC = () => {
  const user: UserProfileType = {
    name: "Abhirami",
    age: 20,
    city: "Palakkad",
    country: "India",
  };

  return (
    <div className="profile-container">
      <h2>Intersection Type Example</h2>
      <div className="profile-card">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>City:</strong> {user.city}</p>
        <p><strong>Country:</strong> {user.country}</p>
      </div>
    </div>
  );
};

export default UserProfile;
