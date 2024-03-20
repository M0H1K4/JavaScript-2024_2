import { useState } from 'react'
import './App.css'

const Luka = {
  name: 'Luka',
  age: 21,
  favouriteCar: "PorsChe 911 GT3 RS"
}

function App() {


  return (
    <>
      <div>
      <h1>My favourite car is: {Luka.favouriteCar}</h1>
     </div>   
    </>
  )
}

export default App
