import React, { useState, useEffect } from 'react'
import Testimonial from './Testimonial'

const Testimonials = () => {
  const [reviews, setReviews] = useState([])

  const fetchData = async () => {
    const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
    const data = await res.json()
    setReviews(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section className="testimonials">
      <h2 className="h1">Clients are Loving Our App</h2>
      {
        reviews.length > 0 && reviews.map(review => (
          <Testimonial key={review.id} author={review.author} jobRole={review.jobRole} starRating={review.starRating} avatarUrl={review.avatarUrl} comment={review.comment}/>
        ))
      }
    </section>
  )
}

export default Testimonials