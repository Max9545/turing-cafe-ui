export const fetchReservations = () => 
fetch('http://localhost:3001/api/v1/reservations')
    .then(res => res.json())
  
    // .then(data => this.setState({
    //   reservations: data
    // }))