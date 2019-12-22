import React from 'react'

import { botData } from './botData'
import Task from './Task'
import './Bot.css'

const Bot = ({ name, type }) => {
  return (
    <div className="Bot">
      <header>
        <h2 className="botHeader">{name}</h2>
        <h3 className="botHeader">{type}</h3>
      </header>
      {
        botData[type].tasks.map(t => <Task task={t.type} eta={t.eta} key={t.eta}/>)
      }
    </div>
  );
}

export default Bot;