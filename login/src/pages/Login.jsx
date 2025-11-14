import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    if (email === "admin@gmail.com" && password === "admin123") {
      navigate("/admin");
      return;
    }
    if (email === "user@gmail.com" && password === "user123") {
      navigate("/user");
      return;
    }
    alert("Wrong Email or Password!");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h2>Login Page</h2>
      <input
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br/><br/>

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br/><br/>
     <button onClick={handleLogin}>Login</button>
    </div>
  );
}
export default Login;
