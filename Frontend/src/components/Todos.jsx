import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoTable from './TodoTable';

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch todos from an API endpoint
    axios.get('http://localhost:8080/todos')
      .then(response => {
        setTodos(response.data.todos); // Accessing todos from response.data.todos
      })
      .catch(error => {
        console.error('Error fetching todos:', error);
      });
  }, []); // Empty dependency array to fetch todos only once on component mount

  const handleDeleteClick = (todoId) => {
    // Implement delete logic
    console.log('Deleting todo with ID:', todoId);
  };

  const handleCompleteClick = (todoId) => {
    // Implement complete logic
    console.log('Completing todo with ID:', todoId);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoTable
        todos={todos}
        handleDeleteClick={handleDeleteClick}
        handleCompleteClick={handleCompleteClick}
      />
    </div>
  );
}

export default Todos;
