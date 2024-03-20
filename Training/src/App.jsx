import React, { useState } from "react";
import "./App.css";

function Changed() {
  return <h1>This is Changed, good job lion</h1>;
}

function App() {
  const [isClicked, setIsClicked] = useState(true);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <div>
        {isClicked ? (
          <Changed />
        ) : (
          <button onClick={handleClick}>Click to Change</button>
        )}
      </div>
    </>
  );
}

export default App;
