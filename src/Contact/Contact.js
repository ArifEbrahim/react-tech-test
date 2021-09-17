import React from 'react'
import './Contact.css'

export default function Contact() {
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
            
          </form>
        </div>
      </div>
    </div>
  )
}
