import React, { useState } from 'react'

import loading from '../images/loading.gif'
import checkmark from '../images/checkmark.png'
import './Bot.css'

const Task = ({ task, eta, onTaskCompletion }) => {
  const [isLoading, setLoading] = useState(false)
  const [isCompleted, setCompleted] = useState(false)
  const seconds = eta / 1000;

  const taskCompletion = () => {
    onTaskCompletion()
    setLoading(false)
    setCompleted(true)
  }

  const handleTaskCompletion = () => {
    setLoading(true)
    setTimeout(taskCompletion, eta)
  }

  return (
    <div>
      {
        isCompleted ? <p className="completedTask">{task} {seconds} {seconds > 1 ? "seconds": "second"}</p> : 
        <p className="task">{task} {seconds} {seconds > 1 ? "seconds": "second"}</p>
      }
      {
        isCompleted ? <img src={checkmark} className="image" alt="checkmark"/> :
        (isLoading ? <img src={loading} className="image" alt="loading" /> : 
        <button onClick={handleTaskCompletion} type="button" className="taskButton">complete</button>)
      }
    </div>
  );
}

export default Task