import React from 'react';
import { aboutTopLine, aboutP1, aboutP2, aboutP3, aboutBulletTitle, aboutP4, aboutP5 } from './aboutText';
import OfficeImage from '../assets/shutterstock_696636415.jpg';
import BulletSection from '../Components/BulletSection';
import './About.css';

export default function About() {
  return (
    <div className = 'container'>
      <div className='section-title'>About Us</div>
      <p>
        <span className='top-line'>{aboutTopLine}</span><br/>
        {aboutP1}
      </p>
      <p>{aboutP2}</p>
      <div className = 'image-container'>
        <img className='about-img' src={OfficeImage} alt='office'/>
      </div>
      <p>{aboutP3}</p>
      <div class='bullet-title'>{aboutBulletTitle}</div>
      <BulletSection />
      <p>{aboutP4}</p>
      <div className='spacer'>
      <p>{aboutP5}</p>
      </div>
    </div>
  )
}
