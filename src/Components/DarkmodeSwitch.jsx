import React from 'react'

const DarkmodeSwitch = () => {

  const toogleDarmode = () => {
    console.log("toggle")
  }

  return (
    <div id="darkmode-switch">
      <span className="nav-text">Dark mode</span>
      <label className="toggle-parent" onClick={toogleDarmode}>
        <input type="checkbox" />
        <span className="toggle"></span>
      </label>
    </div>
  )
}

export default DarkmodeSwitch