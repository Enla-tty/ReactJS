import { useState } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState("")
  const [numberList, setList] = useState([])

  function clearList() {
    setList()
  } function RandomInt(max) {
    return (Math.floor(Math.random() * max));
  }

  function handleClick() {
    const number = RandomInt(10) + " ";
    const numbers = [...numberList, number]
    setList(numbers);
  }

  function shuffle() {
    const numbers = [...numberList]
    const shuffledNumbers = numbers.sort(() => Math.random() - 0.5);
    setList(shuffledNumbers);
  }

  function clearList() {
    setList([])
  }

  console.log(numberList)
  return (
    <>
      <div className="card">
        Liste : {numberList} <br></br>
        <button onClick={() => handleClick()}>
          Ajouter un nombre aléatoire
        </button>
        <button onClick={() => shuffle()}>
          Mélanger la liste !
        </button>
        <button onClick={() => clearList()}>
          Clear
        </button>

      </div>

    </>
  )
}

export default App
