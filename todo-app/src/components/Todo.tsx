import React, { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const handleInput = (value: string) => {
    setInput(value);
  };
  const handleFormSubmit = () => {
    console.log({ input });
  };
  return (
    <div className="border border solid rounded-sm p-40">
      <span className="text-2xl font-medium">Add Your Task Here</span>
      <form onSubmit={handleFormSubmit}>
        <div className="mt-16">
          <input
            type="text"
            name="name"
            className="border rounded-sm px-2 py-1"
            onChange={(e) => handleInput(e.target.value)}
            value={input}
            placeholder="enter your next task"
          />
        </div>
        <div className="mt-4">
          <button type="submit" className="border rounded-sm px-2 py-1">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Todo;
