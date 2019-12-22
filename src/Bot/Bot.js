import React from 'react'

import { botData } from './botData'
import Task from './Task'

const Bot = ({ name, type }) => {
  return (
    <div>
      <header>{name} {type}</header>
      {
        botData[type].tasks.map(t => <Task task={t.type} eta={t.eta} key={t.eta}/>)
      }
    </div>
  );
}

export default Bot;