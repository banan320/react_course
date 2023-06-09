import "./App.css";
import PetInfo from "./components/PetInfo";

function App() {
  return (
    <div className="App">
      <PetInfo animal="dog" age={4} hasPet />
      <PetInfo animal="cat" age={5} hasPet={true} />
      <PetInfo animal="mouse" age="1" hasPet={false} />
    </div>
  );
}

export default App;
