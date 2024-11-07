import React, { useState } from 'react'

const AppointmentForm = () => {
  const [formData, setFormData] = useState({fullName: '', email: '', specialist: ''})
  const [status, setStatus] = useState({})

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
  // handle, visa success
  // submit, visa error, alerta user
  // subscribe också

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
  )
}

export default AppointmentForm