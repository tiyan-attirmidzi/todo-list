// import logo from './logo.svg';
import React, { useState } from "react";
import Paper from '../components/paper/Paper';
import Header from '../components/header/HeaderNoJsx';
import TodoForm from '../components/todo-form/TodoForm';
import Todos from '../components/todos/Todos';
import Container from '../layouts/Container';
// import Item from '../layouts/Item';

const TodoList = () => {

  const [ todos, setTodos ] = useState([
    { text: "Belajar React", isComplated: false },
    { text: "Belajar Express JS", isComplated: false },
    { text: "Belajar MongoDB", isComplated: false },
  ]); 

  const [ showAdd, setShowAdd ] = useState(false); 
  
  const addTodo = value =>{
    if (todos.length < 10) {
      const addedTodo = [...todos, { text: value, isComplated: false }];
      setTodos(addedTodo);
    } else {
      alert("Silahkan Selesaikan Terlebih Dahulu Task Anda!");
      return;
    }
  }

  // const clearTodo = () => !showAdd && setTodos([]);
  const clearTodo = () => showAdd ? alert("Silahkan tutup terlebih dahulu form inputannya!") : setTodos([]);


  const complateTodo = (index) => {
    const addedTodo = [...todos];
    addedTodo[index].isComplated = !addedTodo[index].isComplated;
    setTodos(addedTodo);
  }

  const showAddToggle = () => setShowAdd(!showAdd);

  return (
    <Paper>
      <Container flexDirection="column" justifyContent="space-between" height="100%">
        <Header showAddToggle={ showAddToggle } showAdd={ showAdd } clearTodo={ clearTodo }/>
        <TodoForm addTodo={ addTodo } showAdd={ showAdd }/>
        <Todos todos={ todos } complateTodo={ complateTodo }/>
      </Container>
    </Paper>
  );

}

export default TodoList;
