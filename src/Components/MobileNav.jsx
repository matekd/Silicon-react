import React, { useState } from 'react'
import icon from '../assets/images/icon.svg'
import { NavLink } from 'react-router-dom'

const MobileNav = () => {

  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <button className={`burger ${showMenu ? "rotate90" : ""}`} onClick={() => setShowMenu(!showMenu)}>
        <i className="fa-solid fa-bars"></i>
      </button>
      {showMenu && <div className="mobile-nav">

        <a className="nav-text" href="#features">Features</a>

        <NavLink className="nav-text" to={"/contact"}>Contact</NavLink>
        
        <a href="#" className="btn-primary sign-in">
          <img className="sign-in-icon" src={icon} alt="" />
          <span>Sign in / up</span>
        </a>
      </div>}
    </>
  )
}

export default MobileNav