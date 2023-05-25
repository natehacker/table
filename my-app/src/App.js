import "./App.css"
import { Users } from "./users"
import { useState } from "react";

function App(){
  const[query, setQuery] = useState("")

  // console.log(Users.filter(user => user.first_name.toLowerCase().includes("fe")))

  return(
    <div className="app">
      <input type="text" placeholder="search" className="search"
      onChange={(e)=> setQuery(e.target.value)}/> 
      <ul className="list">
        {Users.filter(user=>user.first_name.toLocaleLowerCase().includes(query)).map((user)=>(
          <li key={user.id}className="listItem">{user.first_name}</li>
        ))}
        <li className="listItem">John</li>
       


       


      </ul>
   
    </div>
  )
}

export default App