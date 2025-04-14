import { useState } from 'react'
import './App.css'



function App() {
  const [letter, setLetter] = useState("")
  const [letterList, setLetterList] = useState([])
  const [temp, setTemp] = useState("")

  function handleChange(e) {
    const value = e.target.value;

    if (value.toUpperCase() != value.toLowerCase()) {
      const valueUp = value.toUpperCase();
      setTemp(valueUp);

    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(letter);
    const list = [...letterList, temp]
    setTemp(null);
    setLetterList(list);
  }

  return (
    <>
      <div className="card">

        <form onSubmit={handleSubmit}>
          <input name="letter" type="text" maxLength={1} onChange={handleChange} />
          <button disabled={!temp} type="submit, reset">Save</button>
        </form>
        {letterList}
      </div>
    </>
  )
}

export default App
