import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const DarkmodeSwitch = () => {
  const { isDarkMode, toggleDarkmode } = useContext(ThemeContext)

  return (
    <div id="darkmode-switch">
      <span className="nav-text">Dark mode</span>
      <label className="toggle-parent" onChange={toggleDarkmode}>
        <input type="checkbox" checked={isDarkMode} readOnly />
        <span className="toggle"></span>
      </label>
    </div>
  )
}

export default DarkmodeSwitch