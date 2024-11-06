import React from 'react'
import call from '../assets/images/call.svg'
import sms from '../assets/images/sms.svg'
import DropDowns from './DropDowns'
import { NavLink } from 'react-router-dom'

const FAQ = () => {
  return (
    <section className="FAQ">
      <div className="faq-text">
        <h2 className="h2">Any questions? Check out the FAQs</h2>
        <p className="text-L">Still have unanswered questions and need to get in touch?</p>
      </div>
      <div className="faq-contact">
        <div className="call">
          <img src={call} alt="" />
          <p className="text-S">Still have  questions?</p>
          <NavLink to={"/contact"} className="faq-contact-call text-S bold">Contact us -{'>'}</NavLink>
        </div>
        <div className="sms">
          <img src={sms} alt="" />
          <p className="text-S">Don't like phone calls?</p>
          <NavLink to={"/contact"} className="faq-contact-sms text-S bold">Contact us -{'>'}</NavLink>
        </div>
      </div>
      <DropDowns />
      <button className="btn-primary btn-contact">Contact us now</button>
    </section>
  )
}

export default FAQ