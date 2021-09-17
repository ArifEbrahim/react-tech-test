import React from 'react'
import './Home.css'
import BulletSection from '../About/BulletSection'
import { sectionTwo, sectionThree, sectionFourP1, sectionFourP2, sectionFourP3 } from './sampleText'
import OfficeImage from '../assets/shutterstock_696636415.jpg'
import Button from '../Components/Button'

export default function Home() {
  return (
    <div className='homepage-container'>
      <div className='homepage-section1'>
        <div className='section1-box1'>
          <div className='box1-title light'>Lorem ipsum dolor</div>
          <p className='light'>Quem vide tincidunt pri ei, id mea omnium denique.</p>
          <Button size={'lrg'} colour={'blue'} text={'Contact Us'} />
        </div>
      </div>
      <div className='homepage-section2 container'>
        <div className='section2-left-box'>
          <div className='section-title'>Justo petentium te vix, scripta regione urbanitas</div>
          <p>{sectionTwo}</p>
          <BulletSection />
          <Button size={'lrg'} colour={'blue'} text={'Learn more'} />
        </div>
        <div className='section2-right-box'></div>
          <img className='section2-img' alt='office' src={OfficeImage} />
      </div>
      <div className='homepage-section3'>
        <div className='section3-box1'>
          <div className='section-title light'>Nulla sem urna, dictum sed nisi in, viverra rutrum neque</div>
          <p className='light'>{sectionThree}</p>
          <Button size={'lrg'} colour={'white'} text={'Log in'} />
        </div>
      </div>
      <div className='homepage-section4 container'>
        <div className='section4-top-text'>
          <div className='section-title'>Sed libero justo, lobortis sit amet suscipit non</div>
          <div className='section4-subtitle'>taria duo ut vis semper abhorreant</div>
        </div>
        <div className='column-container'>
            <p><strong>{sectionFourP1}</strong></p>
            <p>{sectionFourP2}</p>
            <p>{sectionFourP3}</p>
        </div>
        <Button size={'lrg'} colour={'blue'} text={'Contact Us'} />
      </div>
    </div>
  )
}
