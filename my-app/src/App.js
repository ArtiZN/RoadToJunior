import React from 'react';
import TodoList from './Todo/TodoList';
import Context from './Context'
import AddTodo from './Todo/AddTodo';



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

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Context.Provider value={{removeTodo: removeTodo}}>
      <div className='wrapper'>
        <h1>
        Todo List
        </h1>
        <AddTodo/>
        
        {todos.length ? <TodoList todos = {todos} onToggle = {toggleTodo} /> : <p className="beautiful">Nothing to do</p>}
        

    
     </div>
  </Context.Provider>
  )
}

export default App;
