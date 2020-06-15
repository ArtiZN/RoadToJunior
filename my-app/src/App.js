import React from 'react';
import TodoList from './Todo/TodoList';



function App() {
  const todos = [
    {id: 1, completed: false, title: "buy"},
    {id: 2, completed: false, title: "sell"},
    {id: 3, completed: false, title: "resell"}
  ]


  return <div className='wrapper'>
    <h1>Todo List</h1>
    <TodoList todos = {
      todos
    }>

    </TodoList>
  </div>;
}

export default App;
