import React, { useState } from 'react'

import { botData } from './botData'
import robot from '../images/RobotEmoji.png'
import Task from './Task'
import './Bot.css'

const Bot = ({ name, type, setScore, id }) => {
  const [completeTasks, setCompleteTasks] = useState(0)

  const incrementCompletedTasks = () => {
    setCompleteTasks(prev => prev + 1)
    setScore(id)
  }

  return (
    <div className="Bot">
      <header>
        <h2 className="botHeader">{name}</h2>
        <h3 className="botHeader">{type}</h3>
        { completeTasks > 4 ?
          <h3 className="completeHeader">Completed Tasks: {completeTasks}</h3> : 
          <h4 className="botHeader">Completed Tasks: {completeTasks}</h4>
        }
      </header>
      { botData[type].tasks.map(t => <Task task={t.task} eta={t.eta} key={t.eta} onTaskCompletion={incrementCompletedTasks}/>)}
    </div>
  );
}

export default Bot;