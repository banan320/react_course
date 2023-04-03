import { useState } from "react";

const Login = () => {
  const [data, setData] = useState({ username: "", surname: "", password: "" });

  function handleFromSub(event) {
    event.preventDefault();
    console.log(data);
  }

  function handleInputChange(e, name) {
    setData({ ...data, [name]: e.target.value });
  }

  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleFromSub}>
        <label>
          Username:
          <input
            type="text"
            onChange={(e) => handleInputChange(e, "username")}
            value={data.username}
          />
        </label>
        <label>
          Surname:
          <input
            type="text"
            onChange={(e) => handleInputChange(e, "surname")}
            value={data.surname}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            onChange={(e) => handleInputChange(e, "password")}
            value={data.password}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
