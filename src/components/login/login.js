import React, { useState } from "react";
import "./login.css";

function Login() {
  // Declare state variables for username, password, and error message
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle change events for input fields
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Handle submit event for login form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate username and password
    if (username === "admin" && password === "1234") {
      // Login successful, redirect to home page or dashboard
      alert("Login successful!");
    } else {
      // Login failed, show error message
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="input-group">
            <button type="submit">LOGIN</button>
          </div>
          <div className="input-group">
            <p>
              Not registered?{" "}
              <a href="/register">Create an account</a>
            </p>
          </div>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default Login;
