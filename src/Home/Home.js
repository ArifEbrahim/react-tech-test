import React from 'react'
import './Home.css'
import BulletSection from '../About/BulletSection'
import { paragraphFour } from '../About/sampleText'
import OfficeImage from '../assets/shutterstock_696636415.jpg'
import LoginBtn from '../Navbar/LoginBtn'

export default function Home() {
  return (
    <div className='homepage-container'>
      <div className='homepage-section1'>
        <div className='section1-box1'>
          <div className='box1-title light'>Lorem ipsum dolor</div>
          <p className='light'>Quem vide tincidunt pri ei, id mea omnium denique.</p>
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
      <div className='homepage-section3'>
        <div className='section3-box1'>
          <div className='section-title light'>Nulla sem urna, dictum sed nisi in, viverra rutrum neque</div>
          <p className='light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra nisi et massa rhoncus egestas. Ut eget lacus at urna ultricies ultrices eu vitae nisl. Cras vulputate faucibus sem. Nullam sodales dui lorem, laoreet ultricies orci eleifend nec. Suspendisse ornare sem eu ligula ornare ultrices. Quisque tincidunt quam sed nisl volutpat, ut ullamcorper nulla tempor. Integer sed aliquet ipsum. Nullam nec erat posuere, sagittis magna quis, euismod velit. Nulla maximus rutrum felis.</p>
          <LoginBtn />
        </div>
      </div>
    </div>
  )
}
