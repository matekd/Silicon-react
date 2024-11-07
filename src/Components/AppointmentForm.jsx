import React, { useState } from 'react'

const AppointmentForm = () => {
  const [formData, setFormData] = useState({fullName: '', email: '', specialist: ''})
  const [status, setStatus] = useState({})
  const [specialists, setSpecialists] = useState([
    "Doctor",
    "Necromancer"
  ])

  // input-/select- element
  const validateField = (el) => {
    const name = el.name
    const value = el.value
    let newStatus = ''
    let isValid = false

    if (value.trim() === '') {
      newStatus = "Field can't be empty"

    } else if (name === "fullName" && !/^[A-Öa-ö\s\-]{2,}$/.test(value)) {
      newStatus = "Must be at least 2 characters long, no numbers"

    } else if (name === "email" && !/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(value)) {
      newStatus = "Must be a valid email (eg. example@domain.com)"

    } else if (name === "specialist" && !specialists.includes(value)) {
      newStatus = "Specialist must be on the list"
    }

    if (newStatus === '') {
      newStatus = 'Looks good!'
      isValid = true
      el.parentElement.classList.remove('error')
      el.parentElement.classList.add('success')
    } else {
      el.parentElement.classList.add('error')
      el.parentElement.classList.remove('success')
    }

    setStatus(prevStatus => ({...prevStatus, [name]: newStatus}))
    return isValid
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    
    validateField(e.target)

    setFormData({...formData, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let isValid = true
    let inputs = [
      {fullName: ''},
      {email: ''},
      {specialist: ''}
    ]
    inputs.fullName = e.target.querySelector("input[name='fullName']")
    inputs.email = e.target.querySelector("input[name='email']")
    inputs.specialist = e.target.querySelector("select[name='specialist']")

    if (!validateField(inputs.fullName)) isValid = false
    if (!validateField(inputs.email)) isValid = false
    if (!validateField(inputs.specialist)) isValid = false

    if (!isValid) return

    const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (res.ok) {
      alert("Successfully booked an appointment!")
    } else {
      alert("Booking failed")
    }
  }
  return (
    <form id='appointmentForm' className='appointmentForm shadow' onSubmit={handleSubmit} noValidate>
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
          {specialists.map((specialist, index) => (
            <option key={index} value={specialist}>{specialist}</option>
          ))}
        </select>
        {status.specialist && 
          <span className={'text-XS status'}>{status.specialist && status.specialist}</span>}
      </label>

      <button className='btn-primary' type='submit'>Make an appointment</button>
    </form>
  )
}

export default AppointmentForm