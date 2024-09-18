import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt=""/>
      <h1><span>I'm Damika De Silva,</span> frontend developer based in USA.</h1>
      <p>A paragraph is a group of sentences that fleshes out a single idea. In order for a paragraph to be effective, it must begin with a topic sentence, have sentences that support the main idea of that paragraph, and maintain a consistent flow.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact' >Connect with me </AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
