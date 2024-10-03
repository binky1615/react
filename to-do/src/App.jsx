import React, { useState } from 'react';
import CreateToDo from './components/CreateToDo';
import ToDoList from './components/ToDoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <CreateToDo addTodo={addTodo} />
      <ToDoList todos={todos} />
    </div>
  );
}

export default App;