import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a to do"
        value={input}
        className="todo-input"
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}

export default TodoForm;
