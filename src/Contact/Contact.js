import React, {useState} from 'react'
import './Contact.css'
import Button from '../Components/Button'
import SuccessMessage from './SuccessMessage'
import axios from 'axios'

export default function Contact() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone01, setPhone01] = useState("")
  const [phone02, setPhone02] = useState("")
  const [message, setMessage] = useState("")
  const [nameError, setNameError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [phone01Error, setPhone01Error] = useState("")
  const [phone02Error, setPhone02Error] = useState("")
  const [messageError, setMessageError] = useState("")


  let phoneNumbers = [];
  const apiURL='https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit'

  const showPhone02 = () => {
    let numberEl = document.querySelector('#phone02')
    numberEl.style.display = 'flex'
  }

  const handleSubmit = () => {
    addPhoneNumbers()
    const formContents = {
      "FullName": fullName,
      "EmailAddress": email,
      "PhoneNumbers": phoneNumbers,
      "Message": message,
      "bIncludeAddressDetails": false
    }
    const headers = {
      'accept': 'application/json'
    }
    // console.log(formContents)
    axios.post(apiURL, formContents, headers)
    .then(res => {
      console.log(res)
      if (res.status === 200) {
        displaySuccess()
      }
    })
    .catch(error => {
      console.log(error.response.data.Errors)
      handleErrors(error.response.data.Errors)
    })
  }

  const addPhoneNumbers = () => {
    if(phone01) { phoneNumbers.push(phone01) }
    if(phone02) { phoneNumbers.push(phone02) }
  }

  const displaySuccess = () => {
    let formEl = document.querySelector('#form')
    formEl.style.display = 'none'
    let successMsgEl = document.querySelector('.success-message')
    successMsgEl.style.display = 'flex'
  }

  const handleErrors =(errors) => {
    errors.forEach(error => {
      switch(error.FieldName) {
        case 'FullName':
          setNameError(error.MessageCode)
          break;
        case 'EmailAddress':
          setEmailError(error.MessageCode)
          break;
        case 'PhoneNumbers[0]':
          setPhone01Error(error.MessageCode.replaceAll('_', ' '))
          break;
        case 'PhoneNumbers[1]':
          setPhone02Error(error.MessageCode.replaceAll('_', ' '))
          break;
        case 'Message':
          setMessageError(error.MessageCode)
          break;
        default:
      }
    })
  }

  return (
    <div className='contact-us-container'>
      <div className='background-img'>
        <div className='form-container'>
          <div className='section-title'>Contact us</div>
          <p>Populo facilisi nam no, dolor deleniti deseruisse ne cum, nam quodsi aliquam eligendi ne. Ferri euismod accusata te nec, summo accumsan at vix.</p>
          <SuccessMessage />
          <form id='form'>
            <div className='name-email-box'>
              <div className='name-email'>
                <label>Full name</label>
                <input type='text' value={fullName} onChange={(e) => {setFullName(e.target.value)}}></input>
                <div className='error-msg'>{nameError}</div>
              </div>
              <div className='name-email'>
                <label>Email address</label>
                <input type='email' value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
                <div className='error-msg'>{emailError}</div>
              </div>
            </div>
            <div className='phone-no' id='phone01'>
              <label>Phone number 01<span>-optional</span></label>
              <input type='text' value={phone01} onChange={(e) => {setPhone01(e.target.value)}}></input>
              <div className='error-msg'>{phone01Error}</div>
            </div>
            <div className='phone-no' id='phone02'>
              <label>Phone number 02<span>-optional</span></label>
              <input type='text' value={phone02} onChange={(e) => {setPhone02(e.target.value)}}></input>
              <div className='error-msg'>{phone02Error}</div>
            </div>
              <Button size={'xl'} colour={'light'} text={'Add new phone number'} onClick={showPhone02}/>
            <div className='message-title-box'>
              <label>Message</label>
              <span>Maximum text length is 500 characters</span>
            </div>
            <textarea value={message} onChange={(e) => {setMessage(e.target.value)}}></textarea>
            <div className='error-msg'>{messageError}</div>
            <div className='submit-box'>
              <Button size={'xl'} colour={'blue'} text={'Submit'} onClick={handleSubmit}/>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
