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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Voeg een nieuwe task toe"
      />
      <button type="submit">Toevoegen</button>
    </form>
  );
}

export default CreateToDo;