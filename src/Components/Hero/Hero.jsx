import React from 'react'
import { Link } from 'react-scroll'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className="hero container" id="hero">
      <div className="hero-text">
        <h1>We Ensure Better Education for a Better World</h1>

        <p>
          Our cutting-edge curriculum is designed to empower students
          with the knowledge, skills and experience needed to excel in the
          dynamic field of education.
        </p>

        {/* ✅ Link styled as button */}
        <Link to="programs" smooth={true} offset={-80} duration={500} className="btn hero-btn"
        >Explore More<img src={dark_arrow} alt="arrow" />
        </Link>
      </div>
    </div>
  )
}

export default Hero
