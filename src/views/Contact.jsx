import React, { useState } from 'react'
import Nav from '../Components/Nav'
import Location from '../Components/Location'
import Footer from '../Components/Footer'
import map from '../assets/images/map.svg'
import AppointmentForm from '../Components/AppointmentForm'
import { Link } from 'react-router-dom'

const Contact = () => {
  const [locations, setLocations] = useState([
    {
      id : 1,
      name: 'Medical Center 1',
      address: '4517 Washington Ave. Manchester, Kentucky 39495',
      phoneNumber: '(406) 555-0120',
      openingHours: {
        workDays: '9:00 am – 22:00 am',
        weekEnd: '9:00 am – 20:00 am'
      }
    },
    {
      id : 2,
      name: 'Medical Center 2',
      address: '2464 Royal Ln. Mesa,New Jersey 45463',
      phoneNumber: '(406) 544-0123',
      openingHours: {
        workDays: '9:00 am – 22:00 am',
        weekEnd: '9:00 am – 20:00 am'
      }
    }
  ])

  return (
    <header>
      <div className="bg-half-gray">
        <Nav />
        <div className='breadCrumb'>
          <Link to={"/"} className="text-S bold">
            <i className="fa-solid fa-house"></i>Homepage
          </Link>
          <Link to={"/contact"} className="text-S primary bold">
            <i className="fa-solid fa-angles-right"></i>Contact
          </Link>
        </div>
        <section className='contact'>
          <div>
            <h1 className='h1'>Contact us</h1>

            <div className="contact-card">
              <div className='icon'>
                <i className="fa-regular fa-envelope"></i>
              </div>
              <div className="contact-text">
                <h4 className="h4">Email us</h4>
                <p className="text-M">Please feel free to drop us a line. We will respond as soon as possible.</p>
                <Link to={"/"} className='primary text-S bold'>Leave a message <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>
            <div className="contact-card">
              <div className='icon'>
                <i className="fa-solid fa-user-plus"></i>
              </div>
              <div className="contact-text">
                <h4 className="h4">Careers</h4>
                <p className="text-M">Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
                <Link to={"/"} className='primary text-S bold'>Send an application <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>
          </div>

          <AppointmentForm />

          <img className='map' src={map} alt='Map of our locations' />

          <div className='locations'>
            {
              locations.length > 0 && locations.map(item => (
                <Location key={item.id} 
                  name={item.name} 
                  address={item.address} 
                  phoneNumber={item.phoneNumber} 
                  openingHours={item.openingHours} />
            ))}
            <div className="socials">
              <div className="icon"><i className="fa-brands fa-square-facebook"></i></div>
              <div className="icon"><i className="fa-brands fa-twitter"></i></div>
              <div className="icon"><i className="fa-brands fa-square-instagram"></i></div>
              <div className="icon"><i className="fa-brands fa-youtube"></i></div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </header>
  )
}

export default Contact