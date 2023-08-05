import React, { useState } from "react";

const CreateTodo = ({ setTodo, todo }) => {
  const [title, setTitle] = useState("");

  const addTodo = (title) => {
      setTodo([
        {
          id: new Date().getTime(),
          title,
          isCompleted: false,
        },
        ...todo,
      ]);
      setTitle("");
  };

  return (
    <div className="create-todo-container">
        <input
          className="todo-input"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Add a task"
          onKeyPress={(e) => e.key === "Enter" && addTodo(title)}
        />
      
    </div>
  );
};

export default CreateTodo;
