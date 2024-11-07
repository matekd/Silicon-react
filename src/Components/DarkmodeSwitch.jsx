import React, { useEffect, useState } from 'react'

const DarkmodeSwitch = () => {
const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkmode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)

    if (newMode) {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
      localStorage.setItem('theme', 'light')
    }
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
      setIsDarkMode(true)
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
      setIsDarkMode(false)
    }
  }, [])

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