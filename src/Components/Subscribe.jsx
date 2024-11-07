import React, {useState} from 'react'
import bell from '../assets/images/bell.svg'
import envelope from '../assets/images/envelope.svg'

const Subscribe = () => {
  const [formData, setFormData] = useState({ email: '' })
  const [status, setStatus] = useState({})

  const validateField = (el) => {
    const name = el.name
    const value = el.value
    let newStatus = ''
    let isValid = false

    if (value.trim() === '') {
      newStatus = "Field can't be empty"

    } else if (name === "email" && !/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(value)) {
      newStatus = "Must be a valid email (eg. example@domain.com)"
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
    let email = e.target.querySelector("input[name='email']")

    if (!validateField(email)) isValid = false

    if (!isValid) return

    const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (res.ok) {
      alert("Successfully subscribed!")
    } else {
      alert("Subscribtion failed")
    }
  }
  return (
    <section className="subscribe bg-gray">
      <div className="subscribe-text">
        <img src={bell} />
        <h4 className="h4">Subscribe to our newsletter
          <span className="desktop-only"> to stay informed about latest updates</span></h4>
      </div>
      <form className="input-group" onSubmit={handleSubmit} autoComplete='off' noValidate>
        <img src={envelope} alt="" className="envelope" />
        <input type="email" className="form-input text-M" name='email' placeholder="Your Email" onChange={handleChange} value={formData.email}  />
        <button className="btn-primary" type='submit'>Subscribe</button>
        {status.email && 
          <span className={'text-XS status'}>{status.email && status.email}</span>}
      </form>
    </section>
  )
}

export default Subscribe