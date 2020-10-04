import React, { Component } from 'react';

import { withRouter} from 'react-router-dom'
import * as sdiv from '../StyledDivs'



class Employee extends Component{

  
 delete = () => {
   this.props.destroy(this.props.info.id)
   
 }

 update = () => {

   this.props.update(this.props.info.id)
 }
 
 render(){
   const {id, name, surname, email, position, department} = this.props.info
     return(<sdiv.Container>
 <div>First Name: {name}</div>
 <div>Last Name: {surname}</div>
 <div><a className="mailto" href={"mailto:"+ email}>{email}</a></div>
 <div>id: {id}</div>
 <div>Position: {position}</div>
 <div>Department: {department}</div>
 {id==this.props.userid ? <div> Hello!!</div>:
 <button className="btn btn-outline-danger" onClick={this.delete }>Delete</button>}
 {id==this.props.userid ? 
 <div>It's You!!</div>:
 (position==="EMPLOYEE" ?
 <button className="btn  btn-outline-primary" onClick={this.update }>Grant Rights</button> : <button  className="btn btn-outline-danger" onClick={this.update }>Take the power</button>) }

 </sdiv.Container>)}}




 export default withRouter(Employee)