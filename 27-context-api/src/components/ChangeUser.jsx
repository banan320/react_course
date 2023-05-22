import UserContext from "../context/UserContext";
import { useContext, useState } from "react";

const ChangeUser = () => {
  const { user, setUser } = useContext(UserContext);
  const [value, setValue] = useState("");

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button onClick={() => setUser(value)}>Change user</button>

      {/* <button onClick={() => setUser(user === "Alex" ? "Ksenia" : "Alex")}>
        Change user
      </button> */}
    </>
  );
};

export default ChangeUser;
