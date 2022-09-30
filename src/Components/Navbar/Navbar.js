import React from 'react'
import './Navbar.css'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbarHeading">
              Lifeline
        </div>
        <div className="navRightBox">
            <div className="navLinks">
                <a href='/' className="navLink">
                    Home
                </a>
                {/* <div className="navLink">
                    About
                </div> */}
                <a href='/disaster' className="navLink">
                      Disasters
                </a>
            </div>
            <div className="redButton">
                  <BsFillTelephoneFill /> <a  href='/emergency' >Emergency Services</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar