import React, { Component } from 'react';

import {Link, withRouter} from 'react-router-dom'
import * as sdiv from '../styledDivs'




class Client extends Component{

  
 block = () => {
   this.props.destroy(this.props.info.id)
   
 }

 update = () => {

   this.props.update(this.props.info.id)
 }
 
 render(){
   const {id, name, surname, email, city, street, postCode, isActive} = this.props.info
     return(<sdiv.Container>
 <div>First Name: {name}</div>
 <div>Last Name: {surname}</div>
 <div>Email: {email}</div>
 <div>City: {city}</div>
 <div>Street: {street}</div>
 <div>Post Code: {postCode}</div>
{isActive}
 <sdiv.ButtonD onClick={this.block }>
block this user </sdiv.ButtonD>
 <Link to={`/client/${id}`}>Edit</Link><br/>
 <Link to={`reservation/client/${id}`}>Show reservations</Link>
 </sdiv.Container>)}}




 export default withRouter(Client)