import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <div className='nav-list'>
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/contact-us">Contact Us</Link>
        <button className='login-btn'><strong>Log in</strong></button>
      </div>
    </nav>
  )
}
