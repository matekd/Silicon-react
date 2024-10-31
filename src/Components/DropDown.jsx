import React, { useState } from 'react'

const DropDown = ({title, content}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(value => !value)
  }

  return (
    <div className="panel shadow">
      <div className="panel-header">
        <h6 className="h6">{title}</h6>
        {/* <button onClick={toggleOpen} className={isOpen ? "more-btn more-btn-expand" : "more-btn"}></button> */}
        <button onClick={toggleOpen} className={`more-btn ${isOpen ? "more-btn-expand" : ''}`}></button>
      </div>
      {isOpen ? <p className="text-S">{content}</p> : ''}
    </div>
  )
}

export default DropDown