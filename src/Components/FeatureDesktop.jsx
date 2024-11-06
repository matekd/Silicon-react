import React from 'react'
import forecast from '../assets/images/forecast.svg'
import contacts from '../assets/images/contacts.svg'
import payments from '../assets//images/payments.svg'
import wallet from '../assets/images/wallet.svg'

const FeatureDesktop = () => {
  return (
    <section className="features-desktop">
      <div className="list">
        <h2 className="h2">Make your money transfer simple and clear</h2>
        <ul>
          <li className="text-M">Banking transactions are free for you</li>
          <li className="text-M">No monthly cash commission</li>
          <li className="text-M">Manage payments and transactions online</li>
        </ul>
        {/* <a className="btn-primary" href="#">Learn more&nbsp;<i className="fa-solid fa-arrow-right"></i></a> */}
        <a className="btn-primary" href="#">Learn more -&gt;</a>
      </div>
      <img src={forecast} alt="forecast" />
      <img src={contacts} alt="contacts" />
      <div>
        <h2 className="h2">Receive payment from international bank details</h2>
        <div className="cards">
          <div className="feature-card">
            <div className="icon"><img src={payments} alt="" /></div>
            <p className="text-M">Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
          </div>
          <div className="feature-card">
            <div className="icon"><img src={wallet} alt="" /></div>
            <p className="text-M">A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
          </div>
        </div>
        <a className="btn-primary" href="#">Learn more -&gt;</a>
      </div>
    </section>
  )
}

export default FeatureDesktop