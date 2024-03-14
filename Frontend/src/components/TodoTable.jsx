import React from 'react';
import { Space, Table } from 'antd';

function TodoTable({ todos, handleDeleteClick, handleCompleteClick }) {
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Completed',
      dataIndex: 'completed',
      key: 'completed',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => handleDeleteClick(record.key)}>Delete</a>
          <a onClick={() => handleCompleteClick(record.key)}>Mark as Complete</a>
        </Space>
      ),
    },
  ];

  console.log(todos)
  const data = todos.map(todo => ({
    key: todo._id,
    title: todo.title,
    completed: todo.completed ? "Completed" : "Mark as Complete",
    description: todo.description,
  }));

  return (
    <Table columns={columns} dataSource={todos} />
  );
}

export default TodoTable;
