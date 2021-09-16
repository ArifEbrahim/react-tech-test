import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
import Logo from '../assets/Logo.svg'
import LoginBtn from './LoginBtn';

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
            <LoginBtn />
          </div>
        </nav>
      </div>
    </header>
  )
}
