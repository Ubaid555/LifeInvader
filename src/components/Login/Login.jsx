import React, { useState } from "react";
import "./Login.css";
import Register from "../Register/Register";
import { Link } from "react-router-dom";

const Login = () => {
  const [isRegistered, setIsRegistered] = useState(true);

  const handleSwitchToRegister = () => {
    setIsRegistered(false);
  };

  const handleLoginClick = () => {
    // Handle login logic here
  };

  const getRandomAnimation = () => {
    const animations = ["slideRight", "slideTop", "slideLeft"];
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    return randomAnimation;
  };

  return (
    <div className={`login-container ${getRandomAnimation()}`}>
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
            <button type="button" className="login-btn larger" onClick={handleLoginClick}>
              Login
            </button>
            <div className="switch-link">
              <span>Don't have an account? </span>
              <Link to="/Register">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
