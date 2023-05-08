import React from 'react'
import './footer.css'
import 'aos/dist/aos.css';
import music from '../../assets/softmusic.mp3'
import ReactAudioPlayer from 'react-audio-player';

const Footer = () => {


  return (
    <footer data-aos="zoom-in" data-aos-delay="1000" className="footer" id='footer'>
        <div className="footer__container container">
            <h1 className="footer__title">
                Reda Belouch
            </h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.facebook.com/reda.belouch/" className="home__social-icon" target="_blank">
        <i class="bx bxl-facebook"></i>
        </a>

        <a href="https://www.linkedin.com/in/reda-belouch-13392a1b1/" className="home__social-icon" target="_blank">
        <i class="bx bxl-linkedin"></i>
        </a>

        <a href="https://www.instagram.com/reda_belouch/" className="home__social-icon" target="_blank">
        <i class="bx bxl-instagram"></i>
        </a>
            </div>


            <span className='footer__copy'>
                &copy; 2023 Reda Belouch
            </span>
        </div>
    </footer>
  )
}

export default Footer
