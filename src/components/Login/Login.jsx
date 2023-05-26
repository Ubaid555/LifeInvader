import React, { useState } from "react";
import "./Login.css";
import Register from "../Register/Register";
import { Link } from 'react-router-dom'

const Login = () => {
  const [isRegistered, setIsRegistered] = useState(true);

  const handleSwitchToRegister = () => {
    setIsRegistered(false);
  };

  const handleLoginClick = () => {
    // Handle login logic here
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-form">
          <div className="login-form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div className="login-form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div className="login-form-group">
            <button type="button" className="login-btn" onClick={handleLoginClick}>
              Login
            </button>
            <Link to="/Register">
            <button type="button" className="switch-btn" onClick={handleSwitchToRegister}>
              Don't have an account? Register
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
