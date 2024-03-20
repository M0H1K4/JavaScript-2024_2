import { useState } from "react";
import "./App.css";

function Changed() {
  return <h1>This is Changed, good job lion</h1>;
}

function App() {
  const [isClicked, setIsClicked] = useState(true);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };


  let content;
  if(isClicked) {
    content = <button onClick={handleClick}>Click here to change adgili BLEADDD</button>
  } else{
    content = <Changed/>
  } 


  return (
    <>
      <div>{content}</div>
    </>
  );
}

export default App;
