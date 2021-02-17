import React, { Component } from 'react';
import './App.css';
import ReservationsArea from '../ReservationsArea/ReservationsArea'
import Form from '../Form/Form'

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }



  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(res => res.json())
    .then(data => this.setState({
      reservations: data
    }))
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form />
        </div>
        <div className='resy-container'>
          <ReservationsArea
          reservations={this.state.reservations}
          />
        </div>
      </div>
    )
  }
}

export default App;
