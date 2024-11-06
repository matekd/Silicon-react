import React, { useState } from 'react'
import Nav from '../Components/Nav'
import Location from '../Components/Location'
import Footer from '../Components/Footer'
import map from '../assets/images/map.svg'

const Contact = () => {
  const [formData, setFormData] = useState({fullName: '', email: '', specialist: ''})
  const [status, setStatus] = useState({})
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

  const handleChange = (e) => {
    const { name, value } = e.target

    if (value.trim() === '') {
      setStatus(prevStatus => ({...prevStatus, [name]: 'Field is empty'}))
      e.target.parentElement.classList.add('error')
      e.target.parentElement.classList.remove('success')
    } else {
      setStatus(prevStatus => ({...prevStatus, [name]: 'Looks good!'}))
      e.target.parentElement.classList.remove('error')
      e.target.parentElement.classList.add('success')
    }
    switch (name) {
      case ('fullName'):
        console.log('fullName')
        break
      case ('email'):
        console.log('email')
        break
      case ('specialist'):
        console.log('specialist')
        break
    }
    
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Object.values(formData).some((k) => {
    //   console.log(k)
    // })
    for (const input in formData) {
      // console.log(input[])
    }
    // const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(formData)
    // })

    // if (res.ok) {
    //   const data = await res.text()
    //   console.log(res.status)
    //   console.log(data)
    // } else {
    //   const data = await res.text()
    //   console.log(res.status)
    //   console.log(data)
    // }
  }

  return (
    <header>
      <div className="bg-half-gray">
        <Nav />
        <section>
          <div>Nav history</div>
          <div className='contact'>
            <div>
              <h1 className='h1'>Contact us</h1>

              <div className="contact-card">
                <div className='icon'>
                  <i className="fa-regular fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <h4 className="h4">Email us</h4>
                  <p className="text-M">Please feel free to drop us a line. We will respond as soon as possible.</p>
                  <a href="#" className='primary text-S bold'>Leave a message <i className="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
              <div className="contact-card">
                <div className='icon'>
                  <i className="fa-solid fa-user-plus"></i>
                </div>
                <div className="contact-text">
                  <h4 className="h4">Careers</h4>
                  <p className="text-M">Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
                  <a href="#" className='primary text-S bold'>Send an application <i className="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
            </div>

            <form id='appointmentForm' className='appointmentForm shadow' onSubmit={handleSubmit}>
              <h2 className="h2">Get Online Consultation</h2>

              <label className='nav-text'>Full name<br />
                <input type="text" name='fullName' value={formData.fullName} onChange={handleChange} autoComplete='off' required />
                {status.fullName && 
                  <span className={'text-XS status'}>{status.fullName && status.fullName}</span>}
              </label>

              <label className='nav-text'>Email address<br />
                <input type="email" name='email' value={formData.email} onChange={handleChange} autoComplete='off' required />
                {status.email && 
                  <span className={'text-XS status'}>{status.email && status.email}</span>}
              </label>

              <label className='nav-text'>Specialist<br />
                <select name="specialist" value={formData.specialist} onChange={handleChange} required>
                  <option disabled hidden value=''></option>
                  <option value="Doctor">Doctor</option>
                  <option value="Necromancer">Necromancer</option>
                </select>
                {status.specialist && 
                  <span className={'text-XS status'}>{status.specialist && status.specialist}</span>}
              </label>

              <button className='btn-primary' type='submit'>Make an appointment</button>
            </form>

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
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </header>
  )
}

export default Contact