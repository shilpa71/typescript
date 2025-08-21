
import React from "react";
import { users, printUserInfo } from "../components/UserTypes";
import "../styles/Home.css"

const Home: React.FC = () => {
  return (
    <div>
      <h2>User List</h2>
      {users.map((u) => (
        <p key={u.id}>{printUserInfo(u)}</p>
      ))}
    </div>
  );
};

export default Home;
