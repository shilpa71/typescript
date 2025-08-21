import React, { useState } from "react";  
import "../components/Calculator.css";

// Type annotations for variables
let calcTitle: string = "Simple Calculator"; // string type
let version: number = 1.0; // number type
let isActive: boolean = true; // boolean type
let anything: any = "Can be any type"; // any type (not recommended, but shown for demo)
let unknownValue: unknown = "Not sure of the type yet"; // unknown type
let nothing: void = undefined; // void type
let nullable: null = null; // null type

// Function with type annotations
function addNumbers(a: number, b: number): number {
  return a + b; // Returns a number
}

// React functional component with TypeScript
const Calculator: React.FC = () => {
  // State with type annotations
  const [num1, setNum1] = useState<string>(''); // Start with empty string
  const [num2, setNum2] = useState<string>(''); // Start with empty string
  const [result, setResult] = useState<number | null>(null); // result can be number OR null

  // Handle Addition
  const handleAdd = (): void => {
    const n1 = num1 ? parseFloat(num1) : 0;
    const n2 = num2 ? parseFloat(num2) : 0;
    setResult(addNumbers(n1, n2)); // Calls the function we defined above
  };

   // Handle Subtraction
  const handleSubtract = (): void => {
    const n1 = num1 ? parseFloat(num1) : 0;
    const n2 = num2 ? parseFloat(num2) : 0;
    setResult(n1 - n2); // Subtracts numbers
  };

  // Handle Multiplication
  const handleMultiply = (): void => {
    const n1 = num1 ? parseFloat(num1) : 0;
    const n2 = num2 ? parseFloat(num2) : 0;
    setResult(n1 * n2); // Multiplies numbers
  };

  // Handle Division
  const handleDivide = (): void => {
    const n1 = num1 ? parseFloat(num1) : 0;
    const n2 = num2 ? parseFloat(num2) : 0;
    setResult(n2 !== 0 ? n1 / n2 : 0); // Prevents division by zero
  };

  // Handle Clear
  const handleClear = (): void => {
    setNum1('');
    setNum2('');
    setResult(null);
  };

  return (
    
    <div className="calculator-container">
      <h1>{calcTitle}</h1> {/* Calculator Title */}
      <p>Version: {version}</p> {/* Shows version number */}
      <p>Status: {isActive ? "Active" : "Inactive"}</p> {/* Shows status */}

      {/* Input fields */}
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))} // Converts input to number
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
        placeholder="Enter second number"
      />

      {/* Buttons */}
      <div className="button-group">
        <button onClick={handleAdd}>+</button>
        <button onClick={handleSubtract}>-</button>
        <button onClick={handleMultiply}>×</button>
        <button onClick={handleDivide}>÷</button>
        <button onClick={handleClear}>Clear</button>
      </div>

      {/* Result */}
      <h2>Result: {result !== null ? result : "No calculation yet"}</h2>
    </div>
    
  );
};

export default Calculator;