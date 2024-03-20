import { useState } from 'react'
import './App.css'

function App() {
  const [plus, setPlus] = useState(0)
  const handlePlus = () =>{
    setPlus(plus + 1)
  }
  const handleMinus = () =>{
    setPlus(plus - 1)
  }

  return (
    <>
      <div>
        <button onClick={handlePlus}>მომატება</button>
          <h1>{plus}</h1>
        <button onClick={handleMinus} >მოკლება</button>
     </div>   
    </>
  )
}

export default App
