import React from 'react'
import './about.css'
import { useEffect } from 'react'
import 'aos/dist/aos.css';

const Info = () => {


  return (
    <div className="about__info grid">
        <div data-aos="zoom-in" data-aos-delay="50" className="about__box">
            <i className='bx bx-award about__icon'></i>
            <h3 className="about__title">Status</h3>
             <span className="about__subtitle">Student</span>
        </div>

        <div data-aos="zoom-in" data-aos-delay="250" className="about__box">
        <i class='bx bx-briefcase about__icon'></i>
            <h3 className="about__title">completed</h3>
             <span className="about__subtitle">15+ Projects</span>
        </div>

        <div data-aos="zoom-in" data-aos-delay="500" className="about__box">
        <i class='bx bx-support about__icon'></i>
            <h3 className="about__title">Support</h3>
             <span className="about__subtitle">Online 24/7</span>
        </div>
    </div>
  )
}

export default Info
