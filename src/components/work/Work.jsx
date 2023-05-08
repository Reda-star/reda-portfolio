import React from 'react'
import './work.css'
import Works from './Works'

const Work = () => {
  return (
    <section className="work section" id="portfolio">
        <h2 data-aos="zoom-in" className="section__title">Portfolio</h2>
        <span data-aos="zoom-in" data-aos-delay="100"   className="section__subtitle">Most recent works</span>
        <Works/>

    </section>
  )
}

export default Work
