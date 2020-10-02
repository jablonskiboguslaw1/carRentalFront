import React, { Component } from 'react';

import { Link, withRouter} from 'react-router-dom'
import * as sdiv from '../styledDivs'
import ChoosenCar from '../ChoosenCar'
import ClientFromRes from '../ClinetFromRes'
import authService from '../../services/authService'


class Reservation extends Component{

  state={
    currentUser : authService.getCurrentUser()
  }


  cancel = () => {
    this.props.cancelReservation(this.props.info.id)
    
  }
 

 render(){
   const {reservationEnd,car,reservationStart,client} = this.props.info
     return(<sdiv.Container>
 <div>Start date: {reservationStart}</div>
 <div>End date: {reservationEnd}</div>

 <ChoosenCar info = {car}/>
 <ClientFromRes info={client}/>
{!this.state.currentUser.position ? <Link to={`/rental/${car.id}`}>
Rental</Link> : <sdiv.ButtonD onClick={this.cancel}>Cancel</sdiv.ButtonD>}

 
 </sdiv.Container>)}}




 export default withRouter(Reservation)