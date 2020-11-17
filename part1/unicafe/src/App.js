
import "./App.css";
import React , { useState } from "react";
import    Statistics   from "./components/Statistics";
import Button from './components/Button'
function App() {
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [good, setGood] = useState(0);
  const update = (event) => {
    const name = event.target.name;

    let f = undefined;
    switch (name) {
      case "bad":
        f = setBad;
        break;
      case "neutral":
        f = setNeutral;
        break;
      default:
        f = setGood;
    }
    f((value) => value + 1);
  };
 
  return (
    <>
      <h2>give feedback</h2>
      <div onClick={update}>
        <Button name="good"/> 
        <Button name="neutral"/> 
        <Button name="bad"/> 
      </div>
     <Statistics {...{good,neutral,bad}}/>
      
    </>
  );
}

export default App;
