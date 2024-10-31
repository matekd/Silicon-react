import React, {useState} from 'react'
import bell from '../assets/images/bell.svg'
import envelope from '../assets/images/envelope.svg'

const Subscribe = () => {

  const [formData, setFormData] = useState({ email: '' })

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (res.ok) {
      const data = await res.text()
      console.log(res.status)
      console.log(data)
    } else {
      const data = await res.text()
      console.log(res.status)
      console.log(data)
    }
  }
  return (
    <section className="subscribe bg-gray">
      <div className="subscribe-text">
        <img src={bell} />
        <h4 className="h4">Subscribe to our newsletter
          <span className="desktop-only"> to stay informed about latest updates</span></h4>
      </div>
      <form className="input-group" onSubmit={handleSubmit} autoComplete='off'>
        <img src={envelope} alt="" className="envelope" />
        <input type="email" className="form-input text-M" name='email' placeholder="Your Email" onChange={handleChange} value={formData.email} required />
        <button className="btn-primary" type='submit'>Subscribe</button>
      </form>
    </section>
  )
}

export default Subscribe