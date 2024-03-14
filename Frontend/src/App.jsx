import { useEffect, useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'

import axios from 'axios';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Todos from './components/Todos';

function App() {

  const [todos, setTodos] = useState([])

  useEffect( ()=> {
    axios.get('http://localhost:8080/todos')
    .then(res => {
      setTodos(res.data.todos);
  
    })
    .catch(error => {
      console.error('Error fetching todos:', error);
    });
  
  }, []);

  return (
    <>
    <Header />
     <CreateTodo />
     <Todos  todos = {todos}/>
     <Footer />
    </>
  )
}

export default App
