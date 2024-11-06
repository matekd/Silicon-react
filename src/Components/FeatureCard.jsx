import React from 'react'

const FeatureCard = (props) => {
  return (
    <div className="feature-card">
      <div className="icon">
        <img src={props.imgUrl} alt="" />
      </div>
      <div>
        <h3 className="h5">{props.heading}</h3>
        <p className="text-M">{props.text}</p>
      </div>
    </div>
  )
}

export default FeatureCard