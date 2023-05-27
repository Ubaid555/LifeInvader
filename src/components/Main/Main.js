import React from 'react'
import './Main.css'; 
import Header from '../Header/Header'
import Hero from "../Hero/Hero";
import Programs from '../Programs/Programs'
import Testimonials from '../Testimonials/Testimonials'
import Join from "..//Join/Join";
import Plans from '../Plans/plans'
import Reasons from '../Reasons/Reasons'
import Footer from '../Footer/Footer'
function Main() {
  return (
    <div className="main-container">   
        <Hero/>
        <Programs />
        <Reasons />
        <Plans />
        <Testimonials />
        <Join />
        <Footer />        
    </div>
  )
}

export default Main