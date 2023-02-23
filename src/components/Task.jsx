import React from 'react'

function Task({title,description,deleTask,index}) {

  return (
    <div className="task">
        <div>
            <span>{title}</span>
            <div className='over-flow'>
                <p>{description}</p>
            </div>
        </div>
        <button onClick={()=>{deleTask(index)}} >-</button>
    </div>
  )
}

export default Task
