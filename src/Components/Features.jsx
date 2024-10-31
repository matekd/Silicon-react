import React from 'react'
import IconCard from './IconCard'
import featureImg from '../assets/images/phone-card.svg'
import icon1 from '../assets/images/payments.svg'
import icon2 from '../assets/images/security.svg'
import icon3 from '../assets/images/bars-graphic.svg'
import icon4 from '../assets/images/communication.svg'
import icon5 from '../assets/images/wallet.svg'
import icon6 from '../assets/images/happy.svg'

const Features = () => {
  return (
    <section className="features" id="features">
      <img className="feature-img" src={featureImg} alt="Phone with Visa card." />
      <div className="feature-text">
        <h2 className="h1">App Features</h2>
        <p className="text-L">Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Proin volutpat mollis egestas.
          Nam luctus facilisis ultrices. Pellentesque
          volutpat ligula est. Mattis fermentum, at nec
          lacus.</p>
      </div>
      <div className="cards">
        <IconCard imgUrl={icon1} heading="Easy Payments" text="Id mollis consectetur congue egestas egestas suspendisse blandit justo."/>
        <IconCard imgUrl={icon2} heading="Data Security" text="Id mollis consectetur congue egestas egestas suspendisse blandit justo."/>
        <IconCard imgUrl={icon3} heading="Cost Statistics" text="Id mollis consectetur congue egestas egestas suspendisse blandit justo."/>
        <IconCard imgUrl={icon4} heading="Support 24/7" text="Id mollis consectetur congue egestas egestas suspendisse blandit justo."/>
        <IconCard imgUrl={icon5} heading="Regular Cashback" text="Id mollis consectetur congue egestas egestas suspendisse blandit justo."/>
        <IconCard imgUrl={icon6} heading="Top Standards" text="Id mollis consectetur congue egestas egestas suspendisse blandit justo."/>
      </div>
    </section>
  )
}

export default Features