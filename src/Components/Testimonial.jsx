import React from 'react'
import quotes from '../assets/images/quotes.svg'

const Testimonial = ({author, jobRole, starRating, avatarUrl, comment}) => {
  return (
    <div className="testimonial shadow">
      <div className="test-icon"><img src={quotes} alt="" /></div>
      <div className="stars"> {Stars(starRating)} </div>
      <p className="text-L">{comment}</p>
      <div className="profile">
        <img src={avatarUrl} alt="User icon." className="face" />
        <div className="profile-text">
          <p className="name">{author}</p>
          <p className="role">{jobRole}</p>
        </div>
      </div>
    </div>
  )
}

const Stars = (starRating) => {
  let yellow = ''
  let white = ''
  for (let i = 0; i < 5; i++) {
    if (starRating-- > 0) yellow += '\u2605'
    else white += '\u2606';
  }
  return (
    <> <span className="yellow">{yellow}</span><span className="white">{white}</span> </>
  )
}

export default Testimonial