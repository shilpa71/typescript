import React, { useState } from "react";
import "../styles/ValueHandler.css";

const ValueHandler: React.FC = () => {
  const [input, setInput] = useState<string | number>("");
  const [results, setResults] = useState<(string | number)[]>([]);

  // function with union type
  const handleValue = (value: string | number) => {
    if (typeof value === "string") {
      return value.toUpperCase();
    } else {
      return value * value; // square if number
    }
  };

  const handleSubmit = () => {
    if (input === "") return;
    const result = handleValue(isNaN(Number(input)) ? input : Number(input));
    setResults([...results, result]);
    setInput("");
  };

  const handleDelete = (index: number) => {
    const updated = results.filter((_, i) => i !== index);
    setResults(updated);
  };

  return (
    <div className="value-container">
      <h2>Union Type Example</h2>
      <input
        type="text"
        placeholder="Enter text or number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {results.map((res, index) => (
          <li key={index}>
            {res}
            <button className="delete-btn" onClick={() => handleDelete(index)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ValueHandler;
