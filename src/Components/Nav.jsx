import React from 'react'
import icon from '../assets/images/icon.svg'
import { Link, NavLink } from 'react-router-dom'
import DarkmodeSwitch from './DarkmodeSwitch'
import MobileNav from './MobileNav'

const Nav = () => {
  
  return (
    <nav>
      <Link id="nav-logo" to={"/"}></Link>

      <a id="nav-features" className="nav-text nav-link" href="#features">Features</a>

      <NavLink className="nav-text nav-link" to={"/contact"}>Contact</NavLink>

      <DarkmodeSwitch />
      
      <a href="#" className="btn-primary sign-in nav-link">
        <img className="sign-in-icon" src={icon} alt="" />
        <span>Sign in / up</span>
      </a>

      <MobileNav />
    </nav>
  )
}

export default Nav