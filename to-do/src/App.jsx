import React, { useState } from 'react';
import CreateToDo from './components/CreateToDo';
import ToDoList from './components/ToDoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]); // Voeg de nieuwe taak toe aan de bestaande lijst
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index); // Verwijder taak met de gegeven index
    setTodos(updatedTodos);
  };

  return (
    <div className="bg-gradient-to-b from-blue-600 to-blue-800 min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-5xl mb-8 font-bold">{'<Jouw naam>'} To Do List</h1>
      <CreateToDo addTodo={addTodo} />
      <ToDoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default App;