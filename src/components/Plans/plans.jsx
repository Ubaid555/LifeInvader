import React from 'react'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import './plans.css'
import { Link } from "react-router-dom";

function Plans() {
  return (
    <div className="plans-container">
        <div className="blur plans-blur1"></div>
        <div className="blur plans-blur2"></div>
        <div className="programs-header" style={{gap:'2rem'}}>
            <spans className="stroke-text">READY TO START</spans>
            <spans>YOUR JOURNEY</spans>
            <spans className="stroke-text">NOW WITHUS</spans>
        </div>

        <div className="plans">
            {plansData.map((plan,i)=> (
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>$ {plan.price}</span>

                    <div className="features">
                        {plan.features.map((feature,i)=>(
                            <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div><span>See more benefits  </span></div>
                    <Link to="/Register" className="btn">
                    <buttons >Join Now</buttons>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans