import React from 'react'
import Nav from './Nav'
import Hero from './Hero'

const Header = () => {
  return (
    <header>
      <div className="bg-grad">
        <Nav />
        <Hero />
      </div>
    </header>
  )
}

export default Header