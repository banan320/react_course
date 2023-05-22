import { useState } from "react";
import UserContext from "./context/UserContext";
import "./App.css";
import User from "./components/User";
import ChangeUser from "./components/ChangeUser";

function App() {
  const [user, setUser] = useState("Alex");

  return (
    // <UserContext.Provider value={user}>
    <UserContext.Provider value={{ user: user, setUser }}>
      <div className="App">
        <User />
        <ChangeUser />
      </div>
    </UserContext.Provider>
  );
}

export default App;
