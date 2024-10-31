import React from 'react'
import Testimonial from './Testimonial'

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="h1">Clients are Loving Our App</h2>
      <Testimonial 
        author= "Fannie Summers"
        jobRole= "Designer"
        starRating= {4}
        avatarUrl= "https://win24assignmentstorage.blob.core.windows.net/images/fannie-summers-avatar.svg"
        comment= "Working with this team has been a fantastic experience! They understood my vision and delivered a design that exceeded my expectations. I would definitely recommend them."/>
    </section>
  )
}

export default Testimonials