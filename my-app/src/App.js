import React from 'react';
import TodoList from './Todo/TodoList';



function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: "buy"},
    {id: 2, completed: false, title: "sell"},
    {id: 3, completed: false, title: "resell"}
  ])
  
  function toggleTodo(id) {
    setTodos(todos.map (todo => {
      if (todo.id === id) {
        todo.completed=!todo.completed
      }
      return todo;
    }))
  }


  return <div className='wrapper'>
    <h1>
    Todo List
    </h1>
    <TodoList 
      todos = {todos}
      onToggle = {toggleTodo}
    />

   
  </div>;
}

export default App;
