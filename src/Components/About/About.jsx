import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.svg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>       

        {/* New container for left and right sections */}
        <div className="about-content">
            <div className="about-left">
                <img src={profile_img} alt="Profile" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Paragraph 1</p>
                    <p>Paragraph 2</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{ width: "50%" }} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{ width: "50%" }} /></div>
                    <div className="about-skill"><p>Next JS</p><hr style={{ width: "50%" }} /></div>
                </div>
            </div>
        </div>

        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About
