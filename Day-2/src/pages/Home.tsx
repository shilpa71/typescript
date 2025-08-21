import React, { useState } from "react";
import { greetUser } from "../utils/helpers";
import UserCard from "../components/UserCard";


const Home: React.FC = () => {
  // Array of tuples: [string, number]
  const [students, setStudents] = useState<[string, number][]>([]);

  // Temporary states for form inputs
  const [selectedName, setSelectedName] = useState<string>("");
  const [selectedAge, setSelectedAge] = useState<number>(0);

  // Handle form submit
  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedName && selectedAge > 0) {
      setStudents([...students, [selectedName, selectedAge]]);
      setSelectedName(""); // reset
      setSelectedAge(0);
    }
  };

  return (
    <div className="home-container">
      <h1>Student Management</h1>

      {/* Form for adding students */}
      <form onSubmit={handleAddStudent} className="student-form">
        <select
          value={selectedName}
          onChange={(e) => setSelectedName(e.target.value)}
          required
        >
          <option value="">Select Name</option>
          <option value="Shilpa">Shilpa</option>
          <option value="Rahul">Rahul</option>
          <option value="Anu">Anu</option>
          <option value="Arjun">Arjun</option>
        </select>

        <select
          value={selectedAge || ""}
          onChange={(e) => setSelectedAge(Number(e.target.value))}
          required
        >
          <option value="">Select Age</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
        </select>

        <button type="submit">Add Student</button>
      </form>

      {/* Display student cards */}
      <div className="student-list">
        {students.map(([name, age], index) => (
          <div key={index}>
            <p className="greeting">{greetUser(name, age)}</p>
            <UserCard name={name} age={age} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;