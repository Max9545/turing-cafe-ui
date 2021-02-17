import React from 'react'
import './Reservation.css'

const Reservation = ({ id, date, name, number, time}) => {
  return(
    <div className='res-card'>
      <h1 className='res-name'>{name}</h1>
      <h3 className='res-date-and-time'>{date} at {time}</h3>
      <h4 className='res-number-of-guests'>{number} guests</h4>
    </div>
  )
}

export default Reservation