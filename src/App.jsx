
import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedData({
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <div className="container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login Form</h2>

        <label>Username</label>
        <input
          type="text"
          placeholder="Enter username"
          ref={usernameRef}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          ref={passwordRef}
          required
        />

        <button type="submit">Login</button>
      </form>

      {submittedData && (
        <div className="result">
          <h3>Submitted Information</h3>
          <p>
            <strong>Username:</strong> {submittedData.username}
          </p>
          <p>
            <strong>Password:</strong> {submittedData.password}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;