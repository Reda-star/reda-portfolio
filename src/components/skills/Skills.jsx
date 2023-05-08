import React from 'react'
import "./skills.css"
import Frontend from './Frontend'
import Devops from './Devops'
import { useEffect } from 'react'
import 'aos/dist/aos.css';


const Skills = () => {


  return (
    <section className="skills section" id="skills">
        <h2 data-aos="zoom-in" className="section__title">Skills</h2>
        <span data-aos="zoom-in" data-aos-delay="100" className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
            <Frontend/>
            <Devops/>
        </div>
    </section>
  )
}

export default Skills
