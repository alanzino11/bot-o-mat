import React, { useState } from 'react'

import loading from '../images/loader.gif'
import checkmark from '../images/checkmark.png'

const Task = ({ task, eta }) => {
  const [isLoading, setLoading] = useState(false)
  const [isCompleted, setCompleted] = useState(false)
  const seconds = eta / 1000;

  const taskCompletion = () => {
    setLoading(false)
    setCompleted(true)
  }

  const handleTaskCompletion = () => {
    setLoading(true)
    setTimeout(taskCompletion, eta)
  }

  return (
    <div>
      <p>{task} {seconds} seconds</p>
      {
        isCompleted ? <img src={checkmark} alt="checkmark"/> :
        (isLoading ? <img src={loading} alt="loading" /> : 
        <button onClick={handleTaskCompletion} type="button">Complete Task</button>)
      }
    </div>
  );
}

{/* <header className="App-header">
<img src={robot} className="App-logo" alt="logo" />
</header> */}

export default Task