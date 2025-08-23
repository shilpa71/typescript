// Define interface for Person
export interface IPerson {
  name: string;
  age: number;
}

// Base class Person
export class Person implements IPerson {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

