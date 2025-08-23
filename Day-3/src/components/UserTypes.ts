// Interface for User
export interface User {
  id: number;
  name: string;
  age: number;
  email?: string; // optional property
}

// Array of Users
export const users: User[] = [
  { id: 1, name: "Shilpa", age: 22, email: "shilpa@example.com" },
  { id: 2, name: "Anu", age: 25 }, // email optional
  { id: 3, name: "Rahul", age: 28, email: "rahul@example.com" },
];

// Function that accepts a typed object
export function printUserInfo(user: User): string {
  return `ID: ${user.id}, Name: ${user.name}, Age: ${user.age}, Email: ${user.email ?? "N/A"}`;
}
