import React from 'react'

const Subscribe = () => {
  return (
    <section class="subscribe bg-gray">
      <div class="subscribe-text">
        <img src="./images/bell.svg" />
        <h4 class="h4">Subscribe to our newsletter
          <span class="desktop-only"> to stay informed about latest updates</span></h4>
      </div>
      <div class="input-group">
        <img src="./images/envelope.svg" alt="" class="envelope" />
        <input type="email" class="form-input text-M" placeholder="Your Email" />
        <button class="btn-primary">Subscribe</button>
      </div>
    </section>
  )
}

export default Subscribe