import React from 'react'
import './ReservationsArea.css'
import Reservation from '../Reservation/Reservation'

const ReservationsArea = ({ reservations, cancelReservation }) => {


  console.log(reservations)

  const reservationsToShow = reservations.map(reservation => {
    return (
      <Reservation
      id={reservation.id}
      date={reservation.date}
      name={reservation.name}
      number={reservation.number}
      time={reservation.time}
      cancelReservation={cancelReservation}
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