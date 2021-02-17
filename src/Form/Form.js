import React, { Component } from 'react'
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

  render() {
    return(
    <form>
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
    </form>)
  }
}
export default Form