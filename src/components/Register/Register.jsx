import React, { useState } from "react";
import "./Register.css";
import Login from "../Login/Login";
import { Link } from 'react-router-dom'

const Register = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegisterClick = () => {
    // Handle registration logic here
    setIsRegistered(true);
  };

  const handleSwitchToLogin = () => {
    setIsRegistered(false);
  };

  return (
    <div className="register-container">
      <div className="register-content">
        <div className="register-form">
          <div className="register-form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div className="register-form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div className="register-form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="register-form-group">
            <label htmlFor="phone">Phone No.</label>
            <input type="text" name="phone" placeholder="Phone Number" />
          </div>
          <div className="register-form-group">
            <button type="button" className="register-btn" onClick={handleRegisterClick}>
              Register
            </button>
            <Link to="/Login">
            <button type="button" className="switch-btn" onClick={handleSwitchToLogin}>
              Already have an account? Login
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
