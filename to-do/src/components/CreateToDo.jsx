import React, { useState } from 'react';

function CreateToDo({ addTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue(''); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center space-x-4 mb-6">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="What to do?"
        className="p-3 rounded-full text-gray-700 border border-gray-300 shadow-sm w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white text-2xl px-4 py-2 rounded-full"
      >
        +
      </button>
    </form>
  );
}

export default CreateToDo;