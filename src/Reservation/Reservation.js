import React, { Component } from 'react'
import './Reservation.css'



const Reservation = ({ id, date, name, number, time, cancelReservation}) => {

  return(
    <div className='res-card'>
      <h1 className='res-name'>{name}</h1>
      <h3 className='res-date-and-time'>{date} at {time}</h3>
      <h4 className='res-number-of-guests'>{number} guests</h4>
      <button 
      className='cancel'
      id={id}
      onClick={() => cancelReservation(id)}
      >Cancel</button>
    </div>
  )
}

// class Reservation extends Component {
//   constructor() {
//     super() 
//     this.state = {
//       id: this.props.id,
//       date: this.props.date,
//       name:this.props.name,
//       time:this.props.time,
//     }
//   }
//   render() {
//     return (
//       <form className='search-body' id='search-body' onSubmit={this.handleSubmit}>
//       <label for='input-field'>Search by title or filter by your minimum desired movie rating:</label>
//       <input
//         aria-label="search-field" 
//         type="text"
//         name="filter"
//         className='input-field'
//         value={this.state.value}
//         onChange={this.handleChange}
//       />
//       <button className='search-button'>ENTER</button>
//     </form>
//     )
//   }
//}


export default Reservation