import { React, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <Counter count={count} />
      <Button incrClick={incrementCount} />
      <Button incrClick={incrementCount} />
      <Button incrClick={incrementCount} />
      <Button incrClick={incrementCount} />
    </div>
  );
}

export default App;
