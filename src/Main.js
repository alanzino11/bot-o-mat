import React, { useState } from 'react'

import Bot from './Bot/Bot'
import Background from './images/tealrobots2.png'

const Main = () => {
  var background = {
    backgroundImage: `url(${Background})`,
    minHeight: "100vh",
    textAlign: "center",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  }

  const [name, setName] = useState("")
  const [type, setType] = useState("")
  const [bots, setBots] = useState([])
  const [leaders, setLeaders] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === "" || !name.trim()) {
      alert("Please enter a name.");
      setName("")
    }
    else if (type === "") alert("Please provide a bot type.")
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

  const setScore = (score, id) => {
    let newArr = [...bots]; // copying the old datas array
    newArr[id].score = score; // replace e.target.value with whatever you want to change it to
    setBots(newArr); 
    console.log(bots[id])
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleTypeChange = (event) => {
    setType(event.target.value);
  }

  return (
    <div style={background}>
      <div className="header"><header>BOT-O-MAT</header></div>
      <div>
        <form>
          <input type="text" value={name} onChange={handleNameChange} className="input" placeholder="enter a bot name"/>
        </form>
      </div>
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
      <div className="Bots">
        {
          bots.map(bot => <Bot key={bot.id} id={bot.id} name={bot.name} type={bot.type} setScore={setScore}/>)
        }
      </div>
    </div>  
  );
}

export default Main;