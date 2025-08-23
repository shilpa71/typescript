import { Person } from "./Person";

// Define interface for Employee
export interface IEmployee {
  id: number;
  department: string;
}

// Employee extends Person and implements IEmployee
export class Employee extends Person implements IEmployee {
  id: number;
  department: string;

  constructor(id: number, name: string, age: number, department: string) {
    super(name, age);
    this.id = id;
    this.department = department;
  }
}

// Example employee data
export const employees: Employee[] = [
  new Employee(1, "Shilpa", 22, "Frontend"),
  new Employee(2, "Anu", 25, "UI/UX"),
  new Employee(3, "Rahul", 28, "Backend"),
];

