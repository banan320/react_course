import "./App.css";
import PetInfo from "./components/PetInfo";
import OtherComponent from "./components/OtherComponent";

function App() {
  return (
    <div className="App">
      <PetInfo animal="dog" age={4} />
      <PetInfo animal="cat" age={5} />
      <PetInfo animal="mouse" age="1" />
    </div>
  );
}

export default App;
