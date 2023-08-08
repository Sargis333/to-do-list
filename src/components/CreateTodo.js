import React, { useState } from "react";
import { AiOutlineWarning } from "react-icons/ai";

const CreateTodo = ({ setTodo, todo }) => {
  const [title, setTitle] = useState("");
  const [attemptedAdd, setAttemptedAdd] = useState(false);

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setTitle(inputText);

    if (attemptedAdd && inputText.trim().length > 0) {
      setAttemptedAdd(false); 
    }
  };

  const addTodo = () => {
    if (title.trim().length > 0 && title.length <= 120) {
      setTodo([
        {
          id: new Date().getTime(),
          title,
          isCompleted: false,
        },
        ...todo,
      ]);
      setTitle("");
      setAttemptedAdd(false);
    } else {
      setAttemptedAdd(true);
    }
  };

  const remainingCharacters = 120 - title.length;

  const errorMessage =
    attemptedAdd && title.trim().length === 0
      ? "Enter task text"
      : attemptedAdd && title.length > 120
      ? "Character limit exceeded"
      : "";

  return (
    <div className="create-todo-container">
      <input
        className={`todo-input ${errorMessage ? "character-limit-exceeded" : ""}`}
        type="text"
        onChange={handleInputChange}
        value={title}
        placeholder="Add a task"
        onKeyPress={(e) => e.key === "Enter" && addTodo(title)}
      />
      {errorMessage && (
        <p className="character-limit-message">
          {errorMessage} <AiOutlineWarning /> 
        </p>
      )}
      {!errorMessage && (
        <div className="character-count">
          Remaining characters: {remainingCharacters}
        </div>
      )}
    </div>
  );
};

export default CreateTodo;