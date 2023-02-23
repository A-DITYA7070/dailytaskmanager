import React, { useEffect } from 'react'
import "../Home.css";
import Task from './Task';
import { useState } from 'react';
function Home() {
  const [task,setTask]=useState(localStorage.getItem("task")?JSON.parse(localStorage.getItem("task")):[]);
  const [title,setTitle]=useState("");
  const [description,setdescription]=useState("");
  const submitHandler =(e)=>{
    e.preventDefault();
    setTask([...task,{title,description}]);
    setTitle("");
    setdescription("");
  }
  const deleteTask=(index)=>{
     const filteredArray =task.filter((val,i) => {
        return i!==index;
     });
     setTask(filteredArray);
  }
  useEffect(() => {
      localStorage.setItem("task",JSON.stringify(task));
  }, [task])
  
  return (
    <div className='Home'>
      <form onSubmit={submitHandler}>
        <input type="text"
         placeholder='Title'
         value={title}
         required
         onChange={(e)=>setTitle(e.target.value)}
        />
        <textarea 
        placeholder='description'
        required
        value={description}
        onChange={(e)=>setdescription(e.target.value)}
        >
        </textarea>
        <button type="submit" >ADD</button>
      </form>
      {task.map((item,index)=>(
        <Task key={index}
         title={item.title}
         description={item.description}
         deleTask={deleteTask}
         index={index}
        />
      ))}
    </div>
  )
}

export default Home
