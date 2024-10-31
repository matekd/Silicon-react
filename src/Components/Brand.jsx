import React from 'react'

const Brand = (props) => {

  if (props.id === '') return <div className="brand-box shadow"><img src={props.imgUrl} alt={props.imgAlt} /></div>

  return <div className="brand-box shadow" id={props.id}><img src={props.imgUrl} alt={props.imgAlt} /></div>
}

export default Brand