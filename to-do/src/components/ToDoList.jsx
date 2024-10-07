import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ todos, removeTodo }) {
  return (
    <div className="space-y-3">
      {todos.map((todo, index) => (
        <ToDoItem key={index} todo={todo} index={index} removeTodo={removeTodo} />
      ))}
    </div>
  );
}

export default ToDoList;