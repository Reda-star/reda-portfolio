import React from 'react'
import "./skills.css"
import 'aos/dist/aos.css';

const Devops = () => {
    return (
        <div data-aos="zoom-in" data-aos-delay="100" className="skills__content">
            <h3 data-aos="zoom-in" data-aos-delay="200" className="skills__title">DevOps</h3>
    
                <div data-aos="zoom-in" data-aos-delay="300" className="skills__box">
                    <div className="skills__group">
                        <div data-aos="zoom-in" data-aos-delay="600" className="skills__data">
                        <i class='bx bxl-docker icon-docker'  style={{fontSize: "2.3rem", color: "#0db7ed"}}></i>
                            <div>
                                <h3 data-aos="zoom-in" data-aos-delay="700"  className="skills__name">Docker</h3>
                                <span data-aos="zoom-in" data-aos-delay="800"  className="skills__level">Advanced</span>
                            </div>
                        </div>
    
    
                        <div data-aos="zoom-in" data-aos-delay="900"  className="skills__data">
                        <i class='bx bxl-kubernetes icon-kube' style={{fontSize: "2.3rem", color: "#326ce5"}}></i>
                            <div>
                                <h3 data-aos="zoom-in" data-aos-delay="1000"  className="skills__name">Kubernetes</h3>
                                <span data-aos="zoom-in" data-aos-delay="1100"  className="skills__level">Basic</span>
                            </div>
                        </div>
    
    
                        <div data-aos="zoom-in" data-aos-delay="1200"  className="skills__data">
                        <i class='jenkins-icon icon-jenk'></i>
                            <div>
                                <h3 data-aos="zoom-in" data-aos-delay="1300"  className="skills__name">Jenkins</h3>
                                <span data-aos="zoom-in" data-aos-delay="1400"  className="skills__level">Basic</span>
                            </div>
                        </div>
    
    
                    </div>
    
                    <div className="skills__group">
                        <div data-aos="zoom-in" data-aos-delay="1500"  className="skills__data">
                        <i class='bx bxl-git icon-git' style={{fontSize: "2.3rem", color: "#F1502F"}}></i>
                            <div>
                                <h3 data-aos="zoom-in" data-aos-delay="1600"  className="skills__name">Git</h3>
                                <span data-aos="zoom-in" data-aos-delay="1700"  className="skills__level">Advanced</span>
                            </div>
                        </div>
    
    
                        <div data-aos="zoom-in" data-aos-delay="1800"  className="skills__data">
                        <i class='bx bxl-aws icon-aws' style={{fontSize: "2.3rem", color: "#FF9900"}} ></i>
                            <div>
                                <h3 data-aos="zoom-in" data-aos-delay="1900"  className="skills__name">AWS</h3>
                                <span data-aos="zoom-in" data-aos-delay="2000"  className="skills__level">Intermediate</span>
                            </div>
                        </div>
    
    
                        <div data-aos="zoom-in" data-aos-delay="2100"  className="skills__data">
                        <i class='azure icon-azure' style={{fontSize: "2.3rem", color: "#FF9900"}} ></i>
                            <div>
                                <h3 data-aos="zoom-in" data-aos-delay="2200"  className="skills__name">Azure</h3>
                                <span data-aos="zoom-in" data-aos-delay="2300"  className="skills__level">Intermediate</span>
                            </div>
                        </div>
    
    
                    </div>
    
    
                </div>
        </div>
      )
}

export default Devops
