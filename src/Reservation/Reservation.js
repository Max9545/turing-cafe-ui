import React from 'react'
import './Reservation.css'

const Reservation = ({ id, date, name, number, time}) => {
  return(
    <div className='res-card'>
      <h1>{name}</h1>
      <h3>{date} at {time}</h3>
      <h4>{number} of guests</h4>
    </div>
  )
}

export default Reservation