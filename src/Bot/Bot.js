import React, { useState } from 'react'

import { botData } from './botData'
import Task from './Task'
import './Bot.css'

const Bot = ({ name, type }) => {
  const [completeTasks, setCompleteTasks] = useState(0)

  const incrementCompletedTasks = () => {
    setCompleteTasks(completeTasks+1)
  }

  return (
    <div className="Bot">
      <header>
        <h2 className="botHeader">{name}</h2>
        <h3 className="botHeader">{type}</h3>
        <h4 className="botHeader">Completed Tasks: {completeTasks}</h4>
      </header>
      {
        botData[type].tasks.map(t => <Task task={t.task} eta={t.eta} key={t.eta} onTaskCompletion={incrementCompletedTasks}/>)
      }
    </div>
  );
}

export default Bot;