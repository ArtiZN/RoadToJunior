import React from 'react';
import TodoList from './Todo/TodoList';



function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: "Stick your finger in my ass"},
    {id: 2, completed: true, title: "Suck some dick"},
    {id: 3, completed: false, title: "Your dad gave you a good advice"}
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
