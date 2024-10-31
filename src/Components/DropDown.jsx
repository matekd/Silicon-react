import React from 'react'

const DropDown = ({title, content}) => {
  return (
    <div className="panel shadow">
      <div className="panel-header">
        <h6 className="h6">{title}</h6>
        <button className="more-btn more-btn-expand"></button>
      </div>
      <p className="text-S">{content}</p>
    </div>
  )
}

export default DropDown