import React from 'react'
import icon from '../assets/images/icon.svg'
import { Link, NavLink } from 'react-router-dom'
import DarkmodeSwitch from './DarkmodeSwitch'
import MobileNav from './MobileNav'

const Nav = () => {
  
  return (
    <nav>
      <Link id="nav-logo" to={"/"}></Link>

      <Link id="nav-features" className="nav-text nav-link" to="/">Features</Link>

      <NavLink className="nav-text nav-link" to={"/contact"}>Contact</NavLink>

      <DarkmodeSwitch />
      
      <Link to={"/"} className="btn-primary sign-in nav-link">
        <img className="sign-in-icon" src={icon} alt="" />
        <span>Sign in / up</span>
      </Link>

      <MobileNav />
    </nav>
  )
}

export default Nav