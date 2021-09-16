import React from 'react'
import { topLine, paragraphOne, paragraphTwo, paragraphThree, paragraphFour, paragraphFive } from './sampleText'
import OfficeImage from '../assets/shutterstock_696636415.jpg'
import BulletSection from './BulletSection'
import './About.css'

export default function About() {
  return (
    <div className = 'container'>
      <div className='section-title'>About Us</div>
      <p>
        <strong>{topLine}</strong><br/>
        {paragraphOne}
      </p>
      <p>{paragraphTwo}</p>
      <div className = 'image-container'>
        <img className='about-img' src={OfficeImage} alt='office'/>
      </div>
      <p>{paragraphThree}</p>
      <div class='bullet-title'>Taria duo ut vis semper abhorreant:
      </div>
      <BulletSection />
      <p>{paragraphFour}</p>
      <p>{paragraphFive}</p>
    </div>
  )
}
