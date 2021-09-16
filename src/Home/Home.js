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
      <div className='homepage-section4 container'>
        <div className='section4-top-text'>
          <div className='section-title'>Sed libero justo, lobortis sit amet suscipit non</div>
          <div className='section4-subtitle'>taria duo ut vis semper abhorreant</div>
        </div>
        <div className='column-container'>
            <p><strong>Pellentesque ac condimentum felis. Suspendisse vel suscipit dolor, nec laoreet nulla, Nam auctor ultricies dapibus. Donec ac interdum dul, quis finibus lectus. Cras in ultrices neque. Curabitur eget turpis iaculis diam congue sagittis a vel ligula. Mauris ut arcu ex. Nullam quis orci ante, Nunc felis massa, posuere non gravida in, commodo in arcu. in feugiat magna non volutpat faucibus. Nam aliquam justo nec aliquam iaculis. Integer laoreet pulvinar elt pulvinar fermentum. Morbi vehicula sodales nunc ac varius. Proin porttitor porttitor libero vel pharetra</strong></p>
            <p>Cras sit amet dapibus magna, Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec magnis dis parturient mantes, nascetur ridiculus mus Donec finibus nulla quis lorem mcllis lacinia Fusce ut arcu ligula Pellentesque augue ex, pellentesque ut maximus nan, eleifend ut lorem. Vestibulum rutrum malesuada turpis, molestie mattis uelit maximus ac Quisque iaculis hendrerit ex et tincidunt. Aenean eu magna ut nisi placerat fringilla in sed diam. Suspendisse tristique vel dui nec imperdiet. Cras mattis ligula quis fermentum suscipit Proin et elementum arcu, sit amet porttitor diam Curabitur euismod, eratvitae tristique volutpat, augue lectus dignissim justo, at faucibus orri est a elit. Sed sed sapien pretium, maximus felis vel, mollis elit.</p>
            <p>Sed libero justo, lobortis sit amet suscipit nan, auctor non libero. Maecenas quis nisl eget enim porta blandit a nec sapien. Mauris porttitor lorem ut egestas euismccl Donec molestie tempor nibh, nec uenenatis arcu ullamccrper sit amet Nulla facilisL Proin cursus neque ut tortor scelerisque, at iaculis nunc ornare_ Pellentesque non nunc nulla_ Interdum et malesuada fames ac ante ipsum primis in faucibus, Aenean et scdales diatn Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor magna augue, non auctor quam placerat nec_ Nulla sem urna, dictum sed nisi in, viverra rutrum negue_ Aliquam ipsum nunc, porta a augue nec, fringilla mollis arcu_ In a vehicula odio_ Praesent uulputate turpis eleifend egestas ultrices. Sed sed sapien pretium, maximus felis vel, maximus felis vel, mollis elit. Proin nec sagittis nibh. Curabitur fringilla felis a porttitor maxims Vestibulum aliquet ante nec leo malesuada porttitor sit amet et magna.</p>
        </div>
        <button className='blue-btn'>Contact us</button>
      </div>
    </div>
  )
}
