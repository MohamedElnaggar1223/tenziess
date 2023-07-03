import React, { useState } from 'react'
import Confetti from 'react-confetti'
import './style3.css'
import Intro from './components/Intro'
import Die from './components/Die'

function App() {
  const [won, setWon] = useState(false)

  function newDies()
  {
    const dies = []
    for(let i = 0; i < 10; i++)
    {
      dies.push({
        number: Math.floor(Math.random() * 6) + 1,
        clicked: false
      })
    }
    return dies
}

  return (
    <main className="mainPage">
      <Intro />
      <Die dies={newDies} won={setWon}/>
      {won && <Confetti />}
    </main>
  )
}

export default App;
