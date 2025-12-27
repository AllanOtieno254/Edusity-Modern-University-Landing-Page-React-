import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about' id='about'>
      <div className="about-left">
        <img src={about_img} alt="About Us" className='about-img'/>
        <img src={play_icon} alt="Play Icon" className='play-icon'/>
      </div>

        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Embark on a transformative educational journey with Our
               university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge,
                skills, and critical thinking abilities needed to excel in today's dynamic world.
            </p>
            <p>with a focus on innovation,hands-on learning,and personalized mentorship,
                our programs prepare aspiring educators to make a meaningful impact in classrooms,
                schools and communities worldwide. Join us in shaping the future of education and unlocking your full potential as a leader in the field.
            </p>
            <p>Whether you aspire to become a teacher,administrator, counselor or educational Leaders
                our diverse range of programs cater to various interests and career paths within the education sector.
                Discover your passion and embark on a rewarding journey towards a fulfilling career in education with us.
            </p>
        </div>
    </div>
  )
}

export default About
