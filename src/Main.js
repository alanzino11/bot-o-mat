import React, { useState } from 'react'

import Bot from './Bot/Bot'
import robot from './images/RobotEmoji.png'

const Main = () => {
  const [name, setName] = useState("")
  const [type, setType] = useState("")
  const [bots, setBots] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === "") alert("Please enter a name.") 
    else if (type === "") alert("Please provide a bot type.")
    else {
      setBots([...bots, { // ...bots is a spread operator that makes a copy of all the current bots; then we append one more onto the array
        id: bots.length,
        name,
        type
      }])
      setName("")
      setType("")
    }
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleTypeChange = (event) => {
    setType(event.target.value);
  }

  return (
    <div className="App">
      <div><img src={robot} alt="robot" width="100" height="100"/></div>
      <div className="header"><header>bot-o-mat</header></div>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
      </form>
      <form>
      <select value={type} onChange={handleTypeChange}>
        <option value="select">Select</option>
        <option value="Unipedal">Unipedal</option>
        <option value="Bipedal">Bipedal</option>
        <option value="Quadrupedal">Quadrupedal</option>
        <option value="Arachnid">Arachnid</option>
        <option value="Radial">Radial</option>
        <option value="Aeronautical">Aeronautical</option>
      </select>
      </form>
      <form onSubmit={handleSubmit}>
        <input type="submit" value="Add Bot" />
      </form>
      <div>
        <ul>
          {
            bots.map(bot => <Bot key={bot.id} name={bot.name} type={bot.type}/>)
          }
        </ul>
      </div>
    </div>  
  );
}

export default Main;