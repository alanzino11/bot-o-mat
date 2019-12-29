import React, { useState } from 'react'

import Bot from './Bot/Bot'
import robot from './images/RobotEmoji.png'

const Main = () => {
  const [name, setName] = useState("")
  const [type, setType] = useState("")
  const [bots, setBots] = useState([])
  const [leaders, setLeaders] = useState([])
  const [l, setL] = useState([])

  const search = (name, type) => {
    for (let i = 0; i < bots.length; i++) {
      if (bots[i].name === name && bots[i].type === type)
        return true
    }
    return false
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === "" || !name.trim()) {
      alert("Please enter a name.");
      setName("")
    }
    else if (type === "") alert("Please provide a bot type.")
    else {
      if (search(name, type)) alert("This name for this bot is taken.")
      else {
        setBots([...bots, { // ...bots is a spread operator that makes a copy of all the current bots; then we append one more onto the array
          id: bots.length,
          name,
          type,
          score: 0
        }])
        setName("")
        setType("")
      }
    }
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleTypeChange = (event) => {
    setType(event.target.value);
  }

  return (
    <div className="title">
      <div className="header"><header>BOT-O-MAT</header></div>
      <img src={robot} className="headerImage" alt="robot"/>
      <div className="toparea">
        {/* <ul className="leaderboard">
          <header><h1>LEADERS</h1></header>
          {
            l.map(l => <p className="leader">{l.name}: {l.type}    Score: {l.score}</p>)
          }
        </ul> */}
        <div className="botpicker">
          <form>
            <input type="text" value={name} onChange={handleNameChange} className="input" placeholder="enter a bot name"/>
          </form>
          <form>
          <select className="selector" value={type} onChange={handleTypeChange}>
            <option value="select">select</option>
            <option value="unipedal">unipedal</option>
            <option value="bipedal">bipedal</option>
            <option value="quadrupedal">quadrupedal</option>
            <option value="arachnid">arachnid</option>
            <option value="radial">radial</option>
            <option value="aeronautical">aeronautical</option>
          </select>
          </form>
          <form onSubmit={handleSubmit}>
            <input type="submit" value="add bot" className="addButton"/>
          </form>
        </div>
      </div>
      <div className="Bots">
        {
          bots.map(bot => <Bot key={bot.id} id={bot.id} name={bot.name} type={bot.type}/>)
        }
      </div>
    </div>  
  );
}

export default Main;