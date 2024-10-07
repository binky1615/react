import React from 'react';

function ToDoItem({ todo, index, removeTodo }) {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-md shadow-md mb-3 w-80">
      <span className="text-gray-700 font-medium">{todo}</span>
      <div className="flex space-x-3">
        <button className="text-green-500 hover:text-green-600">
          ✓
        </button>
        <button 
          onClick={() => removeTodo(index)} // Voeg een verwijder functie toe
          className="text-blue-500 hover:text-blue-600"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;