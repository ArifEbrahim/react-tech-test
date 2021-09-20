import React from 'react';
import './SuccessMessage.css';

export default function SuccessMessage() {
  return (
    <div className='success-message'>
      <div className='tick-background'>
        <div className='tick-icon'></div>
      </div>
      <div className='section-title'>Your message has been sent</div>
      <p>We will be in contract with you within 24 hours</p>
    </div>
  )
}
