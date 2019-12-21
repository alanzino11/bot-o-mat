import React from 'react';
import { botData } from './botData'

const Bot = ({ name, type }) => {
  return (
    <div>
      <header>{name} {type} {botData[type].tasks[0].task}</header>
    </div>
  );
}

export default Bot;

{/* <header className="App-header">
<img src={robot} className="App-logo" alt="logo" />
</header> */}