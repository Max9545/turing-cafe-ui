import React from 'react'
import './ReservationsArea.css'
import Reservation from '../Reservation/Reservation'

const ReservationsArea = ({ reservations }) => {


  console.log(reservations)

  const reservationsToShow = reservations.map(reservation => {
    return (
      <Reservation
      id={reservation.id}
      date={reservation.date}
      name={reservation.name}
      number={reservation.number}
      time={reservation.time}
      />
    )
  })

  return(
    <div className='res-area'>
    {reservationsToShow}
    </div>
  )


}



export default ReservationsArea