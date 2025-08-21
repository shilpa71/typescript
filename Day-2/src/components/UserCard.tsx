import React from "react";
import "../styles/Home.css";
import "../styles/UserCard.css";

type UserCardProps = {
  name: string;
  age: number;
};

const UserCard: React.FC<UserCardProps> = ({ name, age }) => {
  return (
    <div className="user-card">
      <h2 className="user-name">{name}</h2>
      <p className="user-age">Age: {age}</p>
    </div>
  );
};

export default UserCard;