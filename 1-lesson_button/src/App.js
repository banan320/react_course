import { React, useState } from "react";
import "./App.css";

function Button({ buttonText, buttonColor, buttonClick }) {
  return (
    <>
      <button className={buttonColor} onClick={buttonClick}>
        {buttonText}
      </button>
    </>
  );
}

function App() {
  const [buttonText, setButtonText] = useState("Click me");
  const [buttonColor, setButtonColor] = useState("");

  function buttonClick() {
    setButtonText("Hello world!");
    setButtonColor("green__btn");
  }

  return (
    <div className="App">
      <div className="app">
        {/* <button className={buttonColor} onClick={buttonClick}>
          {buttonText}
        </button> */}
        <Button
          buttonColor={buttonColor}
          buttonText={buttonText}
          buttonClick={buttonClick}
        />
      </div>
    </div>
  );
}

export default App;
