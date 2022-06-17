import { useState } from "react";
import ControlButton from "./ControlButton";
import "./styles.scss";

export default function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1);
  }

  function decrementCounter() {
    setCounter(counter - 1);
  }

  return (
    <div className="App">
      <h1>counter = {counter}</h1>
      <div className="flex">
        <ControlButton onClick={incrementCounter} innerText="+" />
        <ControlButton onClick={decrementCounter} innerText="-" />
        <button className="button">Test button in App.js</button>
      </div>
    </div>
  );
}
