import React from 'react'
import sliderImg1 from '../assets/images/slider-img-1.svg'
import sliderImg2 from '../assets/images/slider-img-2.svg'
import sliderImg3 from '../assets/images/slider-img-3.svg'
import sliderImg4 from '../assets/images/slider-img-4.svg'
import phoneBody from '../assets/images/slider-img-bg.svg'

const Slider = () => {
  return (
    <section className="slider">
      <h2 className="h1">How Does It Work?</h2>
      <div className="carousel">
        <img id="img-1" src={sliderImg1} alt="Budget history." />
        <img id="img-2" src={sliderImg2} alt="Transaction history." />
        <img id="img-3" src={sliderImg3} alt="Contacts." />
        <img id="img-4" src={sliderImg4} alt="Sending a payment." />
        <img id="phone-body" src={phoneBody} alt="Phone body." />
      </div>
      <h3 className="step-1 h4">Latest transaction history</h3>
      <h3 className="step-2 h4"><span className="no-mobile">Step 3. </span>Transfers to people from your contact list</h3>
      <p className="step-1 text-M">Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. 
        Arcu sociis tristique quisque hac in consectetur condimentum. </p>
      <p className="step-2 text-M">Proin volutpat mollis egestas. Nam luctus facilisis ultrices.
        Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
    </section>
  )
}

export default Slider