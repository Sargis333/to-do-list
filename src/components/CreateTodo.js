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

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    if (inputText.length <= 120) {
      setTitle(inputText);
    }
  };

  return (
    <div className="create-todo-container">
      <input
        className="todo-input"
        type="text"
        onChange={handleInputChange}
        value={title}
        placeholder="Add a task"
        onKeyPress={(e) => e.key === "Enter" && addTodo(title)}
      />
    </div>
  );
};

export default CreateTodo;
