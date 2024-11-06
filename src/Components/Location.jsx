import React from 'react'

const Location = ({ name, address, phoneNumber, openingHours }) => {
  return (
    <div className='location'>
        <h4 className="h4">{name}</h4>
        
        <div className="location-body">
          <div>
            <i className="fa-solid fa-location-dot"></i>
            <i className="fa-solid fa-phone-volume"></i>
            <i className="fa-regular fa-clock"></i>
          </div>
          <div>
            <p className='text-M'>{address}</p>
            <p className='text-M'>{phoneNumber}</p>
            <p className='text-M'><span className="bold">Mon - Fri: </span>{openingHours.workDays}<br />
              <span className="bold">Sat - Sun: </span>{openingHours.weekEnd}</p>
          </div>
        </div>
    </div>
  )
}

export default Location