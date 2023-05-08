import React from 'react'
import './services.css'
import { useState } from 'react'
import 'aos/dist/aos.css';

const Services = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) =>{
        setToggleState(index)
    }


  return (
    <section className="services section" id="services">
         <h2 data-aos="zoom-in" className="section__title">Services</h2>
        <span data-aos="zoom-in" data-aos-delay="100"  className="section__subtitle">What i offer</span>

        <div className="services__container container grid">
            <div  className="services__content">
                <div>
                    <i data-aos="zoom-in" className="bx bxs-videos services__icon"></i>
                    <h3 data-aos="zoom-in" className="services__title">Video <br/> Editing</h3>
                </div>

                <span data-aos="zoom-in" className="services__button" onClick={()=> toggleTab(1)}>View more
                <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Video <br/> Editing</h3>

                        <p className="services__modal-description">
                            Providing quality work to client and companies.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Video editing, creation, and special effect.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    logo animation, and motion graphics.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Making Intros.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Game trailers.
                                </p>
                            </li>


                        </ul>
                    </div>
                </div>
            </div>

            <div  className="services__content">
                <div>
                    <i data-aos="zoom-in" className="uil uil-arrow services__icon"></i>
                    <h3 data-aos="zoom-in" className="services__title">Ui/Ux <br />Development</h3>
                </div>

                <span data-aos="zoom-in" onClick={()=> toggleTab(2)} className="services__button">View more
                <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Ui/Ux <br />Development</h3>

                        <p className="services__modal-description">
                            Providing quality work to client and companies.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Frontend web development.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Developping the user interface.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Web page development.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Creating UX interactions.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Design (Figma) to development.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i data-aos="zoom-in" className="bx bx-infinite services__icon"></i>
                    <h3 data-aos="zoom-in" className="services__title">DevOps <br /> Support</h3>
                </div>

                <span data-aos="zoom-in" onClick={()=> toggleTab(3)} className="services__button">View more
                <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">DevOps <br /> Support</h3>

                        <p className="services__modal-description">
                            Providing quality work to client and companies.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Configuration management.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    CI/CD Pipeline.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Automating the build, test and the deployement.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Version control with Git.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Infrastructure management
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Collaboration
                                </p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>


        </div>

    </section>
  )
}

export default Services
