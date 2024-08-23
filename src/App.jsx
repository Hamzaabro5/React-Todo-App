import { useState , useRef } from "react"

const App = ()=> {
  const [todo , setTodo] = useState([])
  const todoValue = useRef()


  const addTodo =(event)=>{
    event.preventDefault()
    todo.push(todoValue.current.value)
    setTodo([...todo])
    
    todoValue.current.value = ``
  }

  const deleteTodo = (index)=>{
    // console.log(`todo deleted` , index);
    todo.splice(index , 1)
    setTodo([...todo])
    
  }

  const editTodo = (index)=>{
    console.log(`todo edit` , index);
    const updatedTodo = prompt(`Edit Your Todo`)
    todo.splice(index , 1 , updatedTodo)
    setTodo([...todo])
  }


  return(
  <>
  <h1>Todo App</h1>
  <form onSubmit={addTodo}>
    <input type="text" placeholder="Enter Todo" ref={todoValue}/>
    <button type="submit">Add Todo</button>
  </form>
  <ul>
    {todo.map((item , index)=>{
      return <div key={index}>
      <li>{item}</li>
      <button onClick={()=> deleteTodo(index)}>Delete</button>
      <button onClick={()=> editTodo(index)}>Edit</button>
      </div>
    })}
  </ul>
  </>
)}

export default App