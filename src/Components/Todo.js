import React from "react";
import { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { RiEdit2Fill } from "react-icons/ri";
import TodoForm from "./TodoForm";
import "./Todo.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  return todos.map(function (todo, index) {
    return (
      <div
        className={todo.isComplete ? "todo-row-complete" : "todo-row"}
        key={index}
      >
        <div className="row"> 
          </div>
          <div className="icons col">
            <RiDeleteBin6Fill
              onClick={() => removeTodo(todo.id)}
              className="delete-icon"
            />
            <RiEdit2Fill
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
              className="edit-icon"
            />
            <div className="containerCheck">
              <input type="checkbox" className="checkBox" />
            </div>
          </div>
        </div>
      </div>
    );
  });
}

export default Todo;
