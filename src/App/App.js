import React, { Component } from 'react';
import './App.css';
import ReservationsArea from '../ReservationsArea/ReservationsArea'
import Form from '../Form/Form'
import { fetchReservations } from '../apiCalls';


class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }



  componentDidMount() {
    this.updateAppState()
  }



 updateAppState = () => {
  fetchReservations()
  .then(data => this.setState({
    reservations: data
  }))
 }

 cancelReservation = (id) => {
   fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
     method: 'DELETE'
   })
   this.updateAppState() 
  // console.log('hi', id)
 }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form updateAppState={this.updateAppState}/>
        </div>
        <div className='resy-container'>
          <ReservationsArea
          reservations={this.state.reservations}
          cancelReservation={this.cancelReservation}
          />
        </div>
      </div>
    )
  }
}

export default App;
