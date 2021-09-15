import React from 'react'
import { topLine, paragraphOne, paragraphTwo, paragraphThree, paragraphFour, paragraphFive } from './sampleText'
import OfficeImage from '../assets/shutterstock_696636415.jpg'
import BulletSection from './BulletSection'

export default function About() {

  return (
    <div>
      <h3>About Us</h3>
      {topLine}
      <p>{paragraphOne}</p>
      <p>{paragraphTwo}</p>
      <img src={OfficeImage} alt='office'/>
      <p>{paragraphThree}</p>
      <BulletSection />
      <p>{paragraphFour}</p>
      <p>{paragraphFive}</p>
    </div>
  )
}
