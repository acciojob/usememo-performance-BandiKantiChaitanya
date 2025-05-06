
import React, { useMemo, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [filter,setFilter]=useState('all')
  const todos = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    text: `Todo ${i + 1}`,
    state: i % 2 === 0, // Alternate between completed & active
  }));

  const filteredTodos=useMemo(()=>{
    // for (let i = 0; i < 50000; i++) {}
    return todos.filter((todo)=>{
      if(filter==='active') return !todo.state
      if(filter==='completed') return todo.state
      return true
    })
  },[filter])



  return (
    <div>
      <div>
        <button onClick={()=>setFilter('all')}  >All</button>
        <button onClick={()=>setFilter('active')} >Active</button>
        <button onClick={()=>setFilter('completed')}  >Completed</button>
        <hr />
        <p><b>Note:</b> List is artificially slowed down!</p>
      </div>
       <ul>
       {
          filteredTodos.map((todo)=>(
            <li key={todo.id} >{todo.state===false ?<del>{todo.text}</del>:todo.text}</li>
          ))
        }
       </ul>
    </div>
  )
}

export default App
