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
          />
        </div>
      </div>
    )
  }
}

export default App;
