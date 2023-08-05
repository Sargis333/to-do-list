import React from "react";
import Check from "./Check";
import { BsTrash } from "react-icons/bs";


const TodoItem = ({ todo, change, deleteTodo }) => {
  const itemClassName = `todo-item  ${
    todo.isCompleted ? "completed" : ""
  }`;

  return (
    <div className={itemClassName}>
      <button onClick={() => change(todo.id)} className="item-button">
        <Check isCompleted={todo.isCompleted} />
        <span className={`item-text ${todo.isCompleted ? "completed-text" : ""}`}>
          {todo.title}
        </span>
      </button>
      <button>
        <BsTrash
          onClick={() => deleteTodo(todo.id)}
          size={22}
          className="item-trash-icon"
        />
      </button>
    </div>
  );
};

export default TodoItem;
