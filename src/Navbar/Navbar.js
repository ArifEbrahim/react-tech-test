import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <ul className='nav-list'>
        <li className='nav-item'>
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li className='nav-item'>
          <Link to="/about-us">About Us</Link>
        </li>
        <li className='nav-item'>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  )
}
