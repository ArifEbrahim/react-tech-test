import React from 'react'
import './Home.css'
import BulletSection from '../About/BulletSection'
import { paragraphFour } from '../About/sampleText'
import OfficeImage from '../assets/shutterstock_696636415.jpg'

export default function Home() {
  return (
    <div className='homepage-container'>
      <div className='homepage-section1'>
        <div className='section1-box1'>
          <div className='box1-title'>Lorem ipsum dolor</div>
          <p>Quem vide tincidunt pri ei, id mea omnium denique.</p>
          <button className='blue-btn'>Contact us</button>
        </div>
      </div>
      <div className='homepage-section2 container'>
        <div className='section2-left-box'>
          <div className='section-title'>Justo petentium te vix, scripta regione urbanitas</div>
          <p>{paragraphFour}</p>
          <BulletSection />
          <button className='blue-btn'>Learn More</button>
        </div>
        <div className='section2-right-box'></div>
          <img className='section2-img' alt='office' src={OfficeImage} />
      </div>
    </div>
  )
}
