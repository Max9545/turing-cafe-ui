import React from 'react'


const Reservation = ({ id, date, name, number, time}) => {
  return(
    <>
      <h1>{name}</h1>
      <h3>{date} at {time}</h3>
      <h4>{number} of guests</h4>
    </>
  )
}

export default Reservation