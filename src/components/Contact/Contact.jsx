import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarker, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const getRandomAnimation = () => {
    const animations = ["slideRight", "slideTop", "slideLeft"];
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    return randomAnimation;
  };

  const containerAnimation = getRandomAnimation();
  const contactInfoAnimation = getRandomAnimation();
  const infoFormAnimation = getRandomAnimation();

  return (
    <div className={`mainc ${containerAnimation}`}>
      <div className={`container ${containerAnimation}`}>
        <div className={`contact-information ${contactInfoAnimation}`}>
          <h2>Contact Information</h2>
          <div className="info">
            <div className="description">
              Fill up the form for any query
            </div>
            <div className="details">
              <div>
                <FaPhone style={{ color: 'brown' }} />
                <span>+3436355069</span>
              </div>
              <div>
                <FaEnvelope style={{ color: 'brown' }} />
                <span>thefitclub@gmail.com</span>
              </div>
              <div>
                <FaMapMarker style={{ color: 'brown' }} />
                <span>C-Block IIUI</span>
              </div>
            </div>
            <div className="social-media">
              <FaFacebook style={{ color: '#4267B2' }} />
              <FaTwitter style={{ color: '#1DA1F2' }} />
              <FaInstagram style={{ color: '#C13584' }} />
            </div>
          </div>
        </div>

        <div className={`information-form ${infoFormAnimation}`}>
          <h2>Information Form</h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="tel" placeholder="Phone Number" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
