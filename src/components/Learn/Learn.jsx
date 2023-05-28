import React, { useState } from 'react';
import { questions } from '../../data/learnData';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Learn.css';

const LearnMorePage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNextQuestion = () => {
    setCurrentQuestion((currentQuestion + 1) % questions.length);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion((currentQuestion - 1 + questions.length) % questions.length);
  };

  const getRandomAnimation = () => {
    const animations = ['slide-right', 'slide-top', 'slide-left', 'slide-bottom'];
    const randomIndex = Math.floor(Math.random() * animations.length);
    return animations[randomIndex];
  };

  return (
    <div className='learnContainer'>
      <div className="question-container">
        <h1>{questions[currentQuestion].question}</h1>
      </div>
      <div className="keypoints-container">
        {questions[currentQuestion].keypoints.map((keypoint, index) => {
          const [heading, description] = keypoint.split(':');

          return (
            <div className={`keypoint-card ${getRandomAnimation()}`} key={index}>
              <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: 'red', textAlign: 'center' }}>
                {heading}:
              </h2>
              <p style={{ textAlign: 'center' }}>{description}</p>
            </div>
          );
        })}
      </div>
      <div className="arrow">
        <button onClick={handlePreviousQuestion}>
          <FaChevronLeft size={30} color="red" /> {/* Left arrow icon */}
        </button>
        <button onClick={handleNextQuestion}>
          <FaChevronRight size={30} color="red" /> {/* Right arrow icon */}
        </button>
      </div>
    </div>
  );
};
export default LearnMorePage;
