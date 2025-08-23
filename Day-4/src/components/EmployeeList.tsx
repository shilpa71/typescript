import React, { useState } from "react";
import { employees as initialEmployees, Employee } from "../data/Employee";
import "../styles/EmployeeList.css";

const EmployeeList: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees);
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | string>("");
  const [department, setDepartment] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  // Add Employee
  const addEmployee = () => {
    if (name && age && department) {
      const newEmployee = new Employee(
        employees.length + 1,
        name,
        Number(age),
        department
      );
      setEmployees([...employees, newEmployee]);
      resetForm();
    }
  };

  // Delete Employee
  const deleteEmployee = (id: number) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  // Start Editing
  const startEdit = (emp: Employee) => {
    setEditId(emp.id);
    setName(emp.name);
    setAge(emp.age);
    setDepartment(emp.department);
  };

  // Save Edited Employee
  const saveEdit = () => {
    setEmployees(
      employees.map((emp) =>
        emp.id === editId ? { ...emp, name, age: Number(age), department } : emp
      )
    );
    resetForm();
  };

  // Reset Form
  const resetForm = () => {
    setName("");
    setAge("");
    setDepartment("");
    setEditId(null);
  };

  return (
    <div className="employee-container">
      <h2>Employee List</h2>

      {/* Employee Form */}
      <div className="employee-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />

        {editId ? (
          <button onClick={saveEdit}>Save</button>
        ) : (
          <button onClick={addEmployee}>Add</button>
        )}
        {editId && <button onClick={resetForm}>Cancel</button>}
      </div>

      {/* Employee Cards */}
      <ul>
        {employees.map((emp: Employee) => (
          <li key={emp.id} className="employee-card">
            <strong>ID: </strong> {emp.id}, <strong>{emp.name}</strong> ({emp.age} years) - {emp.department}
            <div className="employee-actions">
              <button className="edit-btn" onClick={() => startEdit(emp)}>
                Edit
              </button>
              <button className="delete-btn" onClick={() => deleteEmployee(emp.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;

