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

        <Link to={"/"} className="nav-text" href="#features">Features</Link>

        <NavLink className="nav-text" to={"/contact"}>Contact</NavLink>
        
        <Link to={"/"} className="btn-primary sign-in">
          <img className="sign-in-icon" src={icon} alt="" />
          <span>Sign in / up</span>
        </Link>
      </div>}
    </>
  )
}

export default MobileNav