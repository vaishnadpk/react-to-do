import React, { useState, useEffect, useRef } from "react";
import "./TodoForm.css";
import "bootstrap/dist/css/bootstrap.min.css";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

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
      <div className="row">
        <div className="col-9">
          <input
            type="text"
            placeholder="New Task"
            value={input}
            className="todo-input form-control"
            onChange={handleChange}
            ref={inputRef}
          />
        </div>
        <div className="col-3">
          <button className="btn btn-primary">Add</button>
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
