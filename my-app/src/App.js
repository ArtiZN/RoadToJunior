import React from 'react';
import TodoList from './Todo/TodoList';
import Context from './Context'
import AddTodo from './Todo/AddTodo';
import DanilasTask from './Todo/DanilasTask';
import SelectAll from './Todo/SelectAll';
import { element } from 'prop-types';



function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: "Stick your finger in my ass"},
    {id: 2, completed: true, title: "Suck some dick"},
    {id: 3, completed: false, title: "Your dad gave you a good advice"}
  ])

  function witchDoctor(){
     setTodos(todos.map(element=>{
       element.completed=false
       return element;
    }))
  }
  function mirana(){
    setTodos(todos.map(element=>{
      element.completed=true
      return element;
   }))
 }



  //let numbers = React.u

  
  function toggleTodo(id) {
    setTodos(todos.map (todo => {
      if (todo.id === id) {
        todo.completed=!todo.completed
      }
      return todo;
    }))
  }

  function hi () {
    return todos.map((element)=>{
      return element.completed
    })
  }
  let array = hi()


  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {

    setTodos(todos.concat([
      {
        
        title,
        id: Date.now(),
        completed: false
    }
  ]))
  }

  return (
    <Context.Provider value={{removeTodo: removeTodo}}>
      <div className='wrapper'>
        <h1>
        Todo List
        </h1>
        <AddTodo onCreate={addTodo} />
        
        {todos.length ? <TodoList todos = {todos} onToggle = {toggleTodo} /> : <p className="beautiful">Nothing to do</p>}

        <SelectAll info={array} pistrun={witchDoctor} nightStalker={mirana}/>
         
       


        <DanilasTask/>
        

    
     </div>
  </Context.Provider>
  )
}

export default App;
