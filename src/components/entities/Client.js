import React, { Component } from 'react';
import styled from 'styled-components';
import {Link, withRouter} from 'react-router-dom'
import * as sdiv from '../styledDivs'



const ClientContainer = styled.div`
background: #343744;
border-radius: 10px;
padding: 14px;
margin-bottom: 7px;
`

class Client extends Component{

  
 delete = () => {
   this.props.destroy(this.props.info.id)
   
 }

 update = () => {

   this.props.update(this.props.info.id)
 }
 
 render(){
   const {id, name, surname, email, city, street, postCode} = this.props.info
     return(<ClientContainer>
 <div>First Name: {name}</div>
 <div>Last Name: {surname}</div>
 <div>Email: {email}</div>
 <div>City: {city}</div>
 <div>Street: {street}</div>
 <div>Post Code: {postCode}</div>
 <sdiv.ButtonD onClick={this.delete }>Delete</sdiv.ButtonD>
 <Link to={`/client/${id}`}>Edit</Link>
 </ClientContainer>)}}




 export default withRouter(Client)