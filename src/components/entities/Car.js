 
 import React, { Component } from 'react';
 
 import {Link, withRouter} from 'react-router-dom'
 import * as sdiv from '../styledDivs'


 class Car extends Component{

   
  delete = () => {
    this.props.destroy(this.props.info.id)
    
  }

  update = () => {

    this.props.update(this.props.info.id)
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
  <sdiv.ButtonD onClick={this.delete }>Delete</sdiv.ButtonD>
  <Link to={`/cars/${id}`}>edit</Link>
  </sdiv.Container>)}}




  export default withRouter(Car)