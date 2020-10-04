import React, { Component } from 'react';

import { Link, withRouter } from 'react-router-dom'
import * as sdiv from '../StyledDivs'
import ChoosenCar from '../ChoosenCar'
import ClientFromRes from '../ClinetFromRes'
import authService from '../../services/AuthService'


class Reservation extends Component {

  state = {
    currentUser: authService.getCurrentUser()
  }


  cancel = () => {
    this.props.cancelReservation(this.props.info.id)

  }


  render() {
    const { reservationEnd, car, reservationStart, client, id, carRental,carReturn } = this.props.info
    return (<sdiv.Container>
      <div>Start date: {reservationStart}</div>
      <div>End date: {reservationEnd}</div>

      <ChoosenCar info={car} />

      {this.state.currentUser.roles[0] != 'CLIENT' ?
        <div> <ClientFromRes info={client} />{!carRental ? <Link  style ={{background:'coral',color: 'black', fontWeight:'bold'}} className="btn btn-sm btn-outline-secondary" to={`/rental/${id}`}>
        Rental</Link>: carReturn ? <div></div>:<Link className="btn btn-sm btn-outline-secondary"  style ={{background:'blue', Color: 'black',color: 'black', fontWeight:'bold'}}to={`/returns/${id}`}>
        Return</Link>}</div> : carRental ?  <div></div>:<button className="btn btn-danger" onClick={this.cancel}>Cancel</button> }


    </sdiv.Container>)
  }
}




export default withRouter(Reservation)