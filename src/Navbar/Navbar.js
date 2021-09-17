import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
import Logo from '../assets/Logo.svg'
import Button from '../Components/Button'

export default function Navbar() {
  return (
    <header>
      <div className='container'>
        <nav>
          <div className='nav-img'>
            <img src={Logo} alt='logo' className='logo'/>
          </div>
          <div className='nav-list'>
            <Link to="/">Home</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact-us">Contact Us</Link>
            <Button size={'sml'} colour={'white'} text={'Log in'} />
          </div>
        </nav>
      </div>
    </header>
  )
}
