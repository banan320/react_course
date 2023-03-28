import "./App.css";

function App() {
  let buttonText = "Click me";

  const onButton = () => {
    buttonText = "Hello world!";
    console.log(buttonText);
  };

  return (
    <div className="App">
      <div className="app">
        <button onClick={onButton}>{buttonText}</button>
      </div>
    </div>
  );
}

export default App;
