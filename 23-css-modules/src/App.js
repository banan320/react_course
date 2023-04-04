import "./App.css";
import Info from "./components/Info";

function App() {
  return (
    <div className="App">
      <Info />
      <div className="info">
        <h1>App component heading</h1>
        <h2>Hello h2 App </h2>

        <button className="my__button">App button</button>
      </div>
    </div>
  );
}

export default App;
