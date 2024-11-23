import { useState } from "react";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = async () => {
    const resp = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const jsonResp = await resp.json();
    console.log(jsonResp);
    if (jsonResp?.token) {
      localStorage.setItem(jsonResp?.token);
      
    }
  };
  return (
    <div>
      <input
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login}>login</button>
    </div>
  );
};
export default LoginScreen;
