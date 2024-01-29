import React from 'react'
import "./skills.css"
import 'aos/dist/aos.css';

const Frontend = () => {
  return (
    <div data-aos="zoom-in" data-aos-delay="100" className="skills__content">
        <h3 data-aos="zoom-in" data-aos-delay="200" className="skills__title">Development</h3>

            <div data-aos="zoom-in" data-aos-delay="300" className="skills__box">
                <div className="skills__group">
                    <div data-aos="zoom-in" data-aos-delay="400"className="skills__data">
                    <i  class='bx bxl-html5 icon-html' style={{fontSize: "2.3rem", color: "#e34f26"}} ></i>
                        <div>
                            <h3 data-aos="zoom-in" data-aos-delay="600" className="skills__name">HTML</h3>
                            <span data-aos="zoom-in" data-aos-delay="700" className="skills__level">Basic</span>
                        </div>
                    </div>


                    <div data-aos="zoom-in" data-aos-delay="800" className="skills__data">
                    <i class='bx bxl-css3 icon-css' style={{fontSize: "2.3rem", color: "#264de4"}}></i>
                        <div>
                            <h3 data-aos="zoom-in" data-aos-delay="900" className="skills__name">CSS</h3>
                            <span data-aos="zoom-in" data-aos-delay="1000" className="skills__level">Advanced</span>
                        </div>
                    </div>


                    <div data-aos="zoom-in" data-aos-delay="1100" className="skills__data">
                    <i class='bx bxl-javascript icon-javascript'  style={{fontSize: "2.3rem", color: "#F0DB4F"}}></i>
                        <div>
                            <h3 data-aos="zoom-in" data-aos-delay="1200" className="skills__name">Javascript</h3>
                            <span data-aos="zoom-in" data-aos-delay="1300" className="skills__level">Intermediate</span>
                        </div>
                    </div>


                </div>

                <div className="skills__group">
                    <div data-aos="zoom-in" data-aos-delay="1600" className="skills__data">
                    <i class='bx bxl-react icon-react'  style={{fontSize: "2.3rem", color: "#61dbfb"}}></i>
                        <div>
                            <h3 data-aos="zoom-in" data-aos-delay="1700" className="skills__name">React</h3>
                            <span data-aos="zoom-in" data-aos-delay="1800" className="skills__level">Intermediate</span>
                        </div>
                    </div>


                    <div data-aos="zoom-in" data-aos-delay="1900" className="skills__data">
                    <i class='nextjs icon-nextjs'></i>
                         <div>
                            <h3 data-aos="zoom-in" data-aos-delay="2000" className="skills__name">Nextjs</h3>
                            <span data-aos="zoom-in" data-aos-delay="2100" className="skills__level">Basic</span>
                        </div>
                    </div>


                    <div data-aos="zoom-in" data-aos-delay="2200" className="skills__data">
                    <i class='bx bxl-nodejs icon-node' style={{fontSize: "2.3rem", color: "#6cc24a"}}></i>
                        <div>
                            <h3 data-aos="zoom-in" data-aos-delay="2300" className="skills__name">Nodejs</h3>
                            <span data-aos="zoom-in" data-aos-delay="2400" className="skills__level">Advanced</span>
                        </div>
                    </div>


                </div>


            </div>
    </div>
  )
}

export default Frontend
