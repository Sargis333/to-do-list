import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';

const App = () => {
  const [todo, setTodo] = useState([]);

  const updateTodo = (updatedTodo) => {
    setTodo(updatedTodo);
  };

  const length = todo.length;

  return (
    <div className='index-container'>
      {length >= 7 ? (
        <div className='index-container-8'>
          <Home todo={todo} updateTodo={updateTodo} />
        </div>
      ) : (
        <div className='index-container'>
          <Home todo={todo} updateTodo={updateTodo} />
        </div>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
