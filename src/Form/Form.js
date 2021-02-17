import React, { Component } from 'react'
import { fetchReservations } from '../apiCalls'
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name:this.state.name, 
        date: this.state.date, 
        time: this.state.time, 
        number: this.state.number}
        )
    })
    .then(response => response.json())
    .then(data => {
      this.props.updateAppState()
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
   
  }

  render() {
    return(
    <form className='make-res-form' id='make-res-form' onSubmit={this.handleSubmit}>
      <label>
        GuestName
        <input
        aria-label='name-field'
        type='text'
        name='name'
        value={this.state.name}
        onChange={this.handleChange}
        />
      </label>
      <label>
        Date
        <input
        aria-label='date-field'
        type='text'
        name='date'
        value={this.state.date}
        onChange={this.handleChange}
        />
      </label>
      <label>
        Time
        <input
        aria-label='time-field'
        type='text'
        name='time'
        value={this.state.time}
        onChange={this.handleChange}
        />
      </label>
      <label>
        Number
        <input
        aria-label='number-field'
        type='text'
        name='number'
        value={this.state.number}
        onChange={this.handleChange}
        />
      </label>
      <button>Make Reservation</button>
    </form>)
  }
}
export default Form