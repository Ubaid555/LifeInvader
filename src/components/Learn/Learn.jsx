import React, { useState } from 'react';
import {learnData} from '../../data/learnData'
import './Learn.css';


const LearnMorePage = () => {
  return (
    <div className="container">
      {learnData.map((data, index) => (
        <div className="main-container" key={index}>
          <h1>{data.question}</h1>
          <div className="keypoints-container">
            {data.keyPoints.map((point, idx) => (
              <div className="keypoint-card" key={idx}>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="arrow">
        <button>
          <img src="left-arrow.png" alt="Left Arrow" />
        </button>
        <button>
          <img src="right-arrow.png" alt="Right Arrow" />
        </button>
      </div>
    </div>
  );
};

export default LearnMorePage;
