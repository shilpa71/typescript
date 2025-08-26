import React, { useState } from "react";

// Generic Array Wrapper Class
class ArrayWrapper<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  remove(index: number): void {
    this.items.splice(index, 1);
  }

  getAll(): T[] {
    return this.items;
  }
}

const ArrayWrapperComponent: React.FC = () => {
  const [wrapper] = useState(new ArrayWrapper<string>());
  const [input, setInput] = useState("");
  const [list, setList] = useState<string[]>([]);

  const handleAdd = () => {
    wrapper.add(input);
    setList([...wrapper.getAll()]);
    setInput("");
  };

  const handleRemove = (index: number) => {
    wrapper.remove(index);
    setList([...wrapper.getAll()]);
  };

  return (
    <div className="card">
      <h2>🔹 Generic Array Wrapper Class</h2>
      <input
        type="text"
        placeholder="Add item..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button className="delete-btn" onClick={() => handleRemove(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArrayWrapperComponent;
