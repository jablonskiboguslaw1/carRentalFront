import React, { Component } from 'react';
import styled from 'styled-components';
import {Link, withRouter} from 'react-router-dom'
import * as sdiv from '../styledDivs'



const EmployeeContainer = styled.div`
background: #343744;
border-radius: 10px;
padding: 14px;
margin-bottom: 7px;
`

class Employee extends Component{

  
 delete = () => {
   this.props.destroy(this.props.info.id)
   
 }

 update = () => {

   this.props.update(this.props.info.id)
 }
 
 render(){
   const {id, name, surname, email, position, department} = this.props.info
     return(<EmployeeContainer>
 <div>First Name: {name}</div>
 <div>Last Name: {surname}</div>
 <div>Email: {email}</div>
 <div>id: {id}</div>
 <div>Position: {position}</div>
 <div>Department: {department}</div>
 <sdiv.ButtonD onClick={this.delete }>Delete</sdiv.ButtonD>
 <Link to={`/employee/${id}`}>Edit</Link>
 </EmployeeContainer>)}}




 export default withRouter(Employee)