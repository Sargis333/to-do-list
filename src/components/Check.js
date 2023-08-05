import React from "react";
import { BsCheck } from "react-icons/bs";

const Check = ({ isCompleted }) => {
  return (
    <div
      className={`check-container ${isCompleted ? "completed" : ""}`}
    >
      {isCompleted && <BsCheck size={24} className="check-icon" />}
    </div>
  );
};

export default Check;
