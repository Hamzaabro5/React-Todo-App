import { useState , useRef } from "react"

const App = ()=> {
  const [todo , setTodo] = useState([])
  const todoValue = useRef()


  const addTodo =(event)=>{
    event.preventDefault()
    if (todoValue.current.value === ``) {
      alert(`Please Enter Your todo`);
    } else {   
      todo.push(todoValue.current.value)
    }
    setTodo([...todo])
    
    todoValue.current.value = ``
  }

  const deleteTodo = (index)=>{
    // console.log(`todo deleted` , index);
    todo.splice(index , 1)
    setTodo([...todo])
    
  }

  const editTodo = (index)=>{
    // console.log(`todo edit` , index);
    const updatedTodo = prompt(`Edit Your Todo`)
    todo.splice(index , 1 , updatedTodo)
    setTodo([...todo])
  }


  return(
  <>
  <h1 className="text-center my-5">Todo App</h1>
  <form className="text-center" onSubmit={addTodo}>
    <div>
    <input type="text" className="rounded-5 p-2 w-25" placeholder="Enter Todo" ref={todoValue}/>
    </div>
    <div>
    <button className="btn btn-primary rounded-5 my-4 fw-bold" type="submit">Add Todo</button>
    </div>
  </form>
  <ul className="text-center">
    {todo.map((item , index)=>{
      return <div key={index}>
      <h1 className="mt-5">{item}</h1>
      <button className="btn btn-danger rounded-5" onClick={()=> deleteTodo(index)}>Delete</button>
      <button className="btn btn-success rounded-5 ms-4" onClick={()=> editTodo(index)}>Edit</button>
      </div>
    })}
  </ul>
  </>
)}

export default App