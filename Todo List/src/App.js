import React, { useState, useEffect } from 'react';
import './App.css';
//importing Components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  //status
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setfilteredTodos] = useState([]);

  //run once when the app starts
  useEffect(() => {
    getLocalTodos();
  }, [])

  //effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //functions
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setfilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setfilteredTodos(todos.filter(todo => todo.completed === false))
        break;

      default:
        setfilteredTodos(todos)
        break;
    }
  }

  //save to localstorage
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    }
    else {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Todo List {inputText}</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setStatus={setStatus} />
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
