import React from "react";
import { useState } from "react";

export default function Newtask(props) {
  const [inputValue, setInputValue] = useState();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    props.Addtask(inputValue);
    setInputValue("");
  };
  return (
    <div>
      <h1>My to-do list:</h1>
      <form id="to-do" className="to-do" onSubmit={handlesubmit}>
        <input
          id="task"
          type="text"
          placeholder="Enter new task"
          value={inputValue}
          onChange={handleInputChange}
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
