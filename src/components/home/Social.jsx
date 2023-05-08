import React from 'react'
import './home.css'

function Social() {
  return (
    <div className="home__social">
        <a href="https://www.instagram.com/reda_belouch/" className="home__social-icon" target="_blank">
        <i class="uil uil-instagram"></i>
        </a>

        <a href="https://www.linkedin.com/in/reda-belouch-13392a1b1/" className="home__social-icon" target="_blank">
        <i class="uil uil-linkedin"></i>
        </a>

        <a href="https://github.com/Reda-star" className="home__social-icon" target="_blank">
        <i class="uil uil-github"></i>
        </a>

    </div>
  )
}

export default Social