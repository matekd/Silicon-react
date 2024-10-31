import React from 'react'
import icon from '../assets/images/icon.svg'

const Nav = () => {
  return (
    <nav>
      <a id="nav-logo" href="index.html"></a>
      <a id="nav-features" className="nav-text" href="#features">Features</a>
      
      <div id="darkmode-switch">
        <span className="nav-text">Dark mode</span>
        <label className="toggle-parent">
          <input type="checkbox" />
          <span className="toggle"></span>
        </label>
      </div>
      
      <a id="sign-in" href="#" className="btn-primary">
        <img className="sign-in-icon" src={icon} alt="" />
        <span>Sign in / up</span>
      </a>

      <button className="burger">
        <i className="fa-solid fa-bars"></i>
      </button>
    </nav>
  )
}

export default Nav