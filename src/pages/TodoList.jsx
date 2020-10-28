// import logo from './logo.svg';
import React, { useState } from "react";
import Paper from '../components/Paper';
import Header from '../components/Header';
import TodoForm from '../components/TodoForm';
import Todos from '../components/Todos';

const TodoList = () => {

  const [ todos, setTodos ] = useState([
    { text: "Belajar React", isComplated: false },
    { text: "Belajar Express JS", isComplated: false },
    { text: "Belajar MongoDB", isComplated: false },
  ]); 

  const [ showAdd, setShowAdd ] = useState(false); 

  const addTodo = value =>{
    const addedTodo = [...todos, { text: value, isComplated: false }];
    setTodos(addedTodo);
  }

  const complateTodo = (index) => {
    const addedTodo = [...todos];
    addedTodo[index].isComplated = !addedTodo[index].isComplated;
    setTodos(addedTodo);
  }
  const showAddToggle = () => setShowAdd(!showAdd);
  console.log("todos : ", todos);
  return (
    <Paper>
      <Header showAddToggle={showAddToggle} showAdd={showAdd}/>
      <TodoForm addTodo={addTodo} showAdd={showAdd}/>
      <Todos todos={todos} complateTodo={complateTodo}/>
    </Paper>
  );

}

export default TodoList;
