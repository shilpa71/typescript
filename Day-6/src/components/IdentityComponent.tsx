import React, { useState } from "react";

// Generic identity function
function identity<T>(value: T): T {
  return value;
}

const IdentityComponent: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const handleSubmit = () => {
    const result = identity(input);
    setOutput(result);
    setInput(""); // clear input after submit
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  return (
    <div className="card">
      <h2>🔹 Generic Identity Function</h2>
      <input
        type="text"
        placeholder="Enter something..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="button-group">
        <button onClick={handleSubmit}>Show Identity</button>
        <button onClick={handleClear}>Clear</button>
      </div>
      {output && (
        <p>
          Output: <b>{output}</b>
        </p>
      )}
    </div>
  );
};

export default IdentityComponent;
