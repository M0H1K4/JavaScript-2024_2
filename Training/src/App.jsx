import React, { useState } from "react";
import "./App.css";

// function Changed() {
//   return <h1>This is Changed, good job lion</h1>;
// }

function App() {
  const [isClicked, setIsClicked] = useState(0);
  const toggled = () => {
    setIsClicked(isClicked + 1);
  };
  const toggled2 = () => {
    setIsClicked(isClicked - 1);
  };

  return (
    <>
      <div>
        <button onClick={toggled}>მომატება</button>
        <h1>{isClicked}</h1>
        <button onClick={toggled2}>მოკლება</button>
      </div>
    </>
  );
}

export default App;
