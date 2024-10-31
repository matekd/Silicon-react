import React, { useState, useEffect } from 'react'
import DropDown from './DropDown'

const DropDowns = () => {
  const [items, setItems] = useState([])

  const fetchData = async () => {
    const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq')
    const data = await res.json()
    setItems(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="drop-downs">
      {
        items.length > 0 && items.map(item => (
          <DropDown key={item.id} title={item.title} content={item.content}/>
        ))
      }
    </div>
  )
}

export default DropDowns