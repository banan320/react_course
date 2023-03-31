import { React, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";

const texts = [
  "Click me!",
  "Click me please",
  "Heat me",
  "Press me",
  "Click me again",
  "Press me!!!",
];

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <Counter count={count} />
      {texts.map((text, index) => (
        <Button key={index} text={text} incrClick={incrementCount} />
      ))}
    </div>
  );
}

export default App;
