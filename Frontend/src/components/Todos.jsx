import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoTable from './TodoTable';
import CustomModal from './CustomModal';

function Todos() {
  const [todos, setTodos] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState(null);

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
    axios.post('http://localhost:8080/delete', { id: todoId })
      .then(response => {
        console.log(response.data.message); // Log success message if needed
        // Update UI or perform any other actions after successful deletion
      })
      .catch(error => {
        console.error('Error deleting todo:', error);
        // Handle error, show error message, etc.
      });
    console.log('Deleting todo with ID:', todoId);
  };

  const handleUpdate = (record) => {
    setSelectedRecord(record);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoTable
        todos={todos}
        handleDeleteClick={handleDeleteClick}
        handleUpdate={handleUpdate}
      />
      <CustomModal
        title="Update Todo"
        type="Update"
        record={selectedRecord}
        visible={selectedRecord !== null}
        onCancel={() => setSelectedRecord(null)}
      />
    </div>
  );
}

export default Todos;
