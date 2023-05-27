import React, { useState } from "react";
import "./Register.css";
import Login from "../Login/Login";
import { Link } from "react-router-dom";

const Register = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [plan, setPlan] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleRegisterClick = () => {
    let isValid = true;

    if (!username) {
      setUsernameError("Please fill out the field");
      isValid = false;
    } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
      setUsernameError("Username must contain only alphabets and numbers");
      isValid = false;
    } else {
      setUsernameError("");
    }

    if (!password) {
      setPasswordError("Please fill out the field");
      isValid = false;
    } else if (!/^(?=.*[a-zA-Z]).{6,}$/.test(password)) {
      setPasswordError("Password must contain at least six alphabets or a combination of upper and lowercase alphabets");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (!email) {
      setEmailError("Please fill out the field");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!phone) {
      setPhoneError("Please fill out the field");
      isValid = false;
    } else if (!/^[0-9+]+$/.test(phone)) {
      setPhoneError("Phone number can only contain numbers and the optional '+' symbol");
      isValid = false;
    } else {
      setPhoneError("");
    }

    if (isValid) {
      // All fields are valid, handle registration logic here
      setIsRegistered(true);
    }
  };

  const handleSwitchToLogin = () => {
    setIsRegistered(false);
  };

  const handlePlanChange = (e) => {
    setPlan(e.target.value);
  };

  return (
    <div className="register-container">
      <div className="register-content">
        <div className="register-form">
          <div className="register-form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            {usernameError && <p className="alert-message">⚠️ {usernameError}</p>}
          </div>
          <div className="register-form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {passwordError && <p className="alert-message">⚠️ {passwordError}</p>}
          </div>
          <div className="register-form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {emailError && <p className="alert-message">⚠️ {emailError}</p>}
          </div>
          <div className="register-form-group">
            <label htmlFor="phone">Phone No.</label>
            <input type="text" name="phone" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
            {phoneError && <p className="alert-message">⚠️ {phoneError}</p>}
          </div>
          <div className="register-form-group-plan">
            <label htmlFor="plan">Plans</label>
            <div className="register-radio-group">
              <label>
                <input
                  type="radio"
                  name="plan"
                  value="basic"
                  checked={plan === "basic"}
                  onChange={handlePlanChange}
                />
                Basic
              </label>
              <label>
                <input
                  type="radio"
                  name="plan"
                  value="premium"
                  checked={plan === "premium"}
                  onChange={handlePlanChange}
                />
                Premium
              </label>
              <label>
                <input
                  type="radio"
                  name="plan"
                  value="pro"
                  checked={plan === "pro"}
                  onChange={handlePlanChange}
                />
                Pro
              </label>
            </div>
          </div>
          <div className="register-form-group">
            <button type="button" className="register-btn larger" onClick={handleRegisterClick}>
              Register
            </button>
            <div className="switch-link">
              Already have an account? <Link to="/Login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
