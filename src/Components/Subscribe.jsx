import React from 'react'

const Subscribe = () => {
  return (
    <section className="subscribe bg-gray">
      <div className="subscribe-text">
        <img src="./images/bell.svg" />
        <h4 className="h4">Subscribe to our newsletter
          <span className="desktop-only"> to stay informed about latest updates</span></h4>
      </div>
      <div className="input-group">
        <img src="./images/envelope.svg" alt="" className="envelope" />
        <input type="email" className="form-input text-M" placeholder="Your Email" />
        <button className="btn-primary">Subscribe</button>
      </div>
    </section>
  )
}

export default Subscribe