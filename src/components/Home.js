import React, { useState } from 'react';
import TodoItem from './TodoItem';
import CreateTodo from './CreateTodo';

const Home = ({ todo, updateTodo }) => {
  const changeTodo = (id) => {
    const updatedTodo = todo.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    updateTodo(updatedTodo);
  };

  const deleteTodo = (id) => {
    const updatedTodo = todo.filter((item) => item.id !== id);
    updateTodo(updatedTodo);
  };

  return (
    <div className='home-container'>
      <h1 className='home-title'>To Do List</h1>
      {todo.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          todo={todoItem}
          change={changeTodo}
          deleteTodo={deleteTodo}
        />
      ))}
      <CreateTodo setTodo={updateTodo} todo={todo} />
    </div>
  );
};

export default Home;
