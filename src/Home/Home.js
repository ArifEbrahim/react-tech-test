import React from 'react';
import './Home.css';
import BulletSection from '../Components/BulletSection';
import { homeSecTwoTitle, homeSecTwoText, homeSecThreeTitle, homeSecThreeText, homeSecFourTitle, homeSecFourSubtitle, homeSecFourP1, homeSecFourP2, homeSecFourP3 } from './homeText';
import OfficeImage from '../assets/shutterstock_696636415.jpg';
import Button from '../Components/Button';
import SwiperSection from './SwiperSection';
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  const handleClick = () => history.push('/contact-us');

  return (
    <div className='homepage-container'>
      <div className='homepage-section1'>
        <SwiperSection onClick={handleClick}/>
      </div>
      <div className='homepage-section2 container'>
        <div className='section2-left-box'>
          <div className='section-title'>{homeSecTwoTitle}</div>
          <p>{homeSecTwoText}</p>
          <BulletSection />
          <Button size={'lrg'} colour={'blue'} text={'Learn more'} />
        </div>
        <div className='section2-right-box'></div>
          <img className='section2-img' alt='office' src={OfficeImage} />
      </div>
      <div className='homepage-section3'>
        <div className='section3-box1'>
          <div className='section-title white'>{homeSecThreeTitle}</div>
          <p className='white'>{homeSecThreeText}</p>
          <Button size={'lrg'} colour={'light'} text={'Log in'} />
        </div>
      </div>
      <div className='homepage-section4 container'>
        <div className='section4-top-text'>
          <div className='section-title'>{homeSecFourTitle}</div>
          <div className='section4-subtitle'>{homeSecFourSubtitle}</div>
        </div>
        <div className='column-container'>
            <p><strong>{homeSecFourP1}</strong></p>
            <p>{homeSecFourP2}</p>
            <p>{homeSecFourP3}</p>
        </div>
        <Button size={'lrg'} colour={'blue'} text={'Contact Us'} onClick={handleClick}/>
      </div>
    </div>
  )
}
