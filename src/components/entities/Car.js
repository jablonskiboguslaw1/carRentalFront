 
 import React, { Component } from 'react';
 
 import {Link, withRouter} from 'react-router-dom'
import AuthService from '../../services/AuthService';
 import * as sdiv from '../StyledDivs'


 class Car extends Component{


  state={
    currentUser : AuthService.getCurrentUser()
  }

   
  setStatus = () => {
    this.props.setStatus(this.props.info.id)
    
  }

  
  
  render(){
    const {mark,id,mileage,bodyType,model,payForDay,productionYear,color} = this.props.info
      return(<sdiv.Container>
  <div>Mark: {mark}</div>
  <div>Milage: {mileage}</div>
  <div>Model: {model}</div>
  <div>Body Type: {bodyType}</div>
  <div>Cost per day: {payForDay}</div>
  <div>Production Year: {productionYear}</div>
  <div>Color: {color}</div>
  {(this.state.currentUser.roles[0]=='CLIENT') ? <Link className = "btn btn-primary" to={`/reservation/${id}`}>Reservation</Link> :<div>
  <Link className = "btn btn-danger" to={`/status/${id}` }>Change Status</Link>
  <Link className = "btn btn-primary" to={`/cars/${id}`}>Edit</Link></div>
      }
  </sdiv.Container>)}}




  export default withRouter(Car)