import React, { useState } from "react";
import "./Contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  const getRandomAnimation = () => {
    const animations = ["slideRight", "slideTop", "slideLeft"];
    const randomAnimation =
      animations[Math.floor(Math.random() * animations.length)];
    return randomAnimation;
  };

  return (
    <div className={`login-container ${getRandomAnimation()}`}>
      <div className="login-content">
        <div className="contact-form">
          <div className="contact-form-group">
            <label htmlFor="username">Name</label>
            <input type="text" name="name" placeholder="Name" />
          </div>
          <div className="contact-form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="contact-form-group message">
            <label htmlFor="message">Message</label>
            <input type="text" name="message" placeholder="Message" />
          </div>
          <div className="contact-form-group">
            <button type="button" className="contact-btn larger">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
