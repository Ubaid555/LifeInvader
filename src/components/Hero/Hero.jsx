import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
import Heart from "../../assets/heart.png";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Calories from "../../assets/calories.png"

import {motion} from 'framer-motion'

const hero = () => {
  const transition = {type: 'spring',duration: 3}
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
        <div className="left-h">
          <Header/>
           
          {/*The best add heading start*/}
        
          <div className="the-best-ad">
              <motion.div
               initial = {{left:'238px'}}
               whileInView={{left:'8px'}}
               transition = {{...transition,type:'tween'}}>
             
              </motion.div>
              <span>The best fitness club in the town</span>
          
          </div>
          {/*The best add heading close*/}

          {/*Opening the Hero text div*/ }
          <div className="hero-text">
            <div >
                <span className='stroke-text'>Shape </span>
                <span> Your</span>
            </div>
            <div>
                <span>Ideal body</span>
            </div>
            <div>
              <span>In here we will help you to shape and build your ideal body and live up your life to fullest.</span>
            </div>
          </div>
            {/*Closing the Hero text div*/ }

            {/*Figures Opening*/}
            <div className ="figures">
              <div>
                <span>+ 140</span>
                <span>Expert Coaches</span>
              </div>
              <div>
                <span>+ 978</span>
                <span>members joined</span>
              </div>
              <div>
                <span>+ 50</span>
                <span>Fitness Programs</span>
              </div>
            </div>
            {/*Figures Closing*/}

            {/*Buttons Start*/}

            <div className="Hero-Button">
              <buttons className="btn">Get Started</buttons>
              <button className="btn">Learn More</button>

            </div>
            {/*Buttons close*/}

        </div>

        <div className="right-h">
           {/*join now button */}
          <button className="btn">
            Join Now
          </button>

          {/*Right Side Text */}
          <motion.div
          initial={{right:"-1rem"}}
          whileInView={{right: "4rem"}}
          transition={transition}
          className="heart-rate">
            <img src={Heart} alt="" />
            <span>Heart Rate </span>
            <span> 116 bpm</span>
          </motion.div>

          <img src={hero_image} alt="" className='hero-image' />
          <motion.img
          initial={{right:'11rem'}}
          whileInView={{right:'20rem'}}
          transition={transition} src={hero_image_back} alt="" className='hero-image-back' />
          
          <motion.div
                initial={{right:"37rem"}}
                whileInView={{right:"28rem"}}
                transition={transition}
                 className="calories">
          <img src={Calories} alt="" />
            <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
            </div>
           
          </motion.div>
        </div>
        {/* Hero Images */}
       
    </div>
  )
}

export default hero