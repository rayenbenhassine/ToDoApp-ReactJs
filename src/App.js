import {useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import './App.css';
import ToDoList from './Components/ToDoList';
import ToDoPanel from './Components/ToDoPanel';

function App() {
  let [todos, setTodos] = useState([])
  let [errorMsg, setErrorMsg] = useState("")

  useEffect(()=>{
    if(localStorage.getItem("todos") == null)
      localStorage.setItem("todos",JSON.stringify(todos));
    setTodos(JSON.parse(localStorage.getItem('todos')));
  },[])

 
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">My Todos</h1>
        <ToDoPanel todos={todos} setTodos={setTodos} setErrorMsg={setErrorMsg}/>
        <span className="errorMsg">{errorMsg}</span>
        <ToDoList todos={todos} setTodos={setTodos}/> 
      </div>
    </div>
  );
}

export default App;
