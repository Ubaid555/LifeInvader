import React, { useState } from "react";
import "./Login.css";
import LoginImage from "../../assets/login.jpg";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);

  const handleRegisterClick = () => {
    setIsRegister(!isRegister);
  };

  return (
  
    <div className="login-container">
        <div className="trancont">
      
    </div>
      <div className="login-content">
        <div className="login-image">
          <img src={LoginImage} alt="" className="hero-image" />
        </div>
        {isRegister ? (
          <div className="register-form">
            <div className="login-form-group">
              <label htmlFor="username">Username</label>
              <input className="inputusername" type="text" name="username" placeholder="Username" />
            </div>
            <div className="login-form-group">
              <label htmlFor="password">Password</label>
              <input className="inputusername" type="password" name="password" placeholder="Password" />
            </div>
            <div className="login-form-group">
              <label htmlFor="email">Email</label>
              <input className="inputusername" type="email" name="email" placeholder="Email" />
            </div>
            <div className="login-form-group">
              <label htmlFor="phone">Phone Number</label>
              <input className="inputusername" type="text" name="phone" placeholder="Phone Number" />
            </div>
            <div className="login-form-group">
              <button type="button" className="login-btn" onClick={handleRegisterClick}>
                Login
              </button>
            </div>
          </div>
        ) : (
          <div className="login-form">
            <div className="login-form-group">
              <label htmlFor="username">Username</label>
              <input className="inputusername" type="text" name="username" placeholder="Username" />
            </div>
            <div className="login-form-group">
              <label htmlFor="password">Password</label>
              <input className="inputusername" type="password" name="password" placeholder="Password" />
            </div>
            <div className="login-form-group">
              <button  type="button" className="login-btn" onClick={handleRegisterClick}>
                Register
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
