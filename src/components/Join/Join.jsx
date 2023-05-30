import React, { useState } from "react";
import "./Join.css";
import { Link } from "react-router-dom";

const Join = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    if (email.trim() === '') {
      // Email field is empty, show an error message
      setErrorMessage('Please enter your email address.');
    } else if (!email.includes('@')) {
      // Invalid email address, show an error message
      setErrorMessage('Please enter a valid email address.');
    } else {
      console.log('Redirecting...');
    window.location.href = "/Contact";
    }
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form className="email-container" onSubmit={validateEmail}>
          <input
            required
            type="email"
            name="user_email"
            placeholder="Enter your Email Address here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <button type="submit" className="btn btn-j">Join now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
