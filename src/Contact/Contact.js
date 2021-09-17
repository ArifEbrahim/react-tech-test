import React from 'react'
import './Contact.css'
import Button from '../Components/Button'

export default function Contact() {

  const showPhone02 = () => {
    let numberEl = document.querySelector('#phone02')
    numberEl.style.display = 'flex'
  }

  return (
    <div className='contact-us-container'>
      <div className='background-img'>
        <div className='form-container'>
          <div className='section-title'>Contact us</div>
          <p>Populo facilisi nam no, dolor deleniti deseruisse ne cum, nam quodsi aliquam eligendi ne. Ferri euismod accusata te nec, summo accumsan at vix.</p>
          <form>
            <div className='name-email-box'>
              <div className='name-email'>
                <label>Full name</label>
                <input type='text'></input>
              </div>
              <div className='name-email'>
                <label>Email address</label>
                <input type='email'></input>
              </div>
            </div>
            <div className='phone-no' id='phone01'>
              <label>Phone number 01<span>-optional</span></label>
              <input type='text'></input>
            </div>
            <div className='phone-no' id='phone02'>
              <label>Phone number 02<span>-optional</span></label>
              <input type='text'></input>
            </div>
            <div className='new-number-btn' onClick={showPhone02}>
              <Button size={'xl'} colour={'light'} text={'Add new phone number'} />
            </div>
            <div className='message-title-box'>
              <label>Message</label>
              <span>Maximum text length is 500 characters</span>
            </div>
            <textarea></textarea>
            <Button size={'xl'} colour={'blue'} text={'Submit'} />
          </form>
        </div>
      </div>
    </div>
  )
}
