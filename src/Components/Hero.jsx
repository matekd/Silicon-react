import React from 'react'
import appleWhite from '../assets/images/apple-white.svg'
import appleDark from '../assets/images/apple-black.svg'
import google from '../assets/images/google-store.svg'
import heroPhone from '../assets/images/phones-hero.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="headline">
        <h1 className="D4">Manage All Your<br />Money in One App</h1>
      </div>
      <div className="hero-content">
        <p className="text-L">We offer you a new generation of the mobile banking.<br className="no-mobile" /> Save, spend & manage money in your pocket.</p>
        <div className="mkt-btns">
          <a id="apple" className="btn-market btn-primary" href="#">
            <img className="white-apple" src={appleWhite} alt="App Store logo." />
            <img className="dark-apple" src={appleDark} alt="App Store logo." />
            <div>
              <p className="mkt-text">Download on the</p>
              <p className="mkt-title">App Store</p>
            </div>
          </a>
          <a id="google" className="btn-market btn-primary" href="#">
            <img src={google} alt="Google Play logo." />
            <div>
              <p className="mkt-text">GET IT ON</p>
              <p className="mkt-title">Google Play</p>
            </div>
          </a>
        </div>
        <div className="more-container">
          <div className="hero-more">
            <button className="more-btn shadow"></button>
            <span className="text-S">Discover more</span>
          </div>
        </div>
        </div>
      <div className="hero-images">
        <img className="phones" src={heroPhone} alt="Bank app on phone." />
      </div>
    </section>
  )
}

export default Hero
