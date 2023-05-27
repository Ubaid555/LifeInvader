import React from 'react'
import "./Programs.css" 
import Register from "../Register/Register";
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
import { Link } from "react-router-dom";

const Programs = () => {
  return (
    <div className="Programs" id="programs">
        {/* Header */}
        <div className="programs-header">
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>

        
        <div className="program-categories">
  {programsData.map((program) => (
    <Link to="/Register" className="category-link">
      <div className="category">
        {program.image}
        <span>{program.heading}</span>
        <span>{program.details}</span>
        <div className="join-now">
          <span>Join Now</span>
          <img src={RightArrow} />
        </div>
      </div>
    </Link>
  ))}
</div>

        
    </div>
  )
}

export default Programs