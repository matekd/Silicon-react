import React from 'react'
import call from '../assets/images/call.svg'
import sms from '../assets/images/sms.svg'
import DropDown from './DropDown'

const FAQ = () => {
  return (
    <section className="FAQ">
      <div className="faq-text">
        <h2 className="h2">Any questions? Check out the FAQs</h2>
        <p className="text-L">Still have unanswered questions and need to get in touch?</p>
      </div>
      <div className="contact">
        <div className="call">
          <img src={call} alt="" />
          <p className="text-S">Still have  questions?</p>
          <a href="#" className="contact-call">Contact us -{'>'}</a>
        </div>
        <div className="sms">
          <img src={sms} alt="" />
          <p className="text-S">Don't like phone calls?</p>
          <a href="#" className="contact-sms">Contact us -{'>'}</a>
        </div>
      </div>
      <div className="drop-downs">
        <DropDown 
          title="Is any of my personal information stored in the App?" 
          content="No, the app does not store any personal information. All data is encrypted and stored securely on our servers. You have full control over your data at all times."/>
      </div>
      <button className="btn-primary btn-contact">Contact us now</button>
    </section>
  )
}

export default FAQ