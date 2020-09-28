 
 import React, { Component } from 'react';
 import styled from 'styled-components';
 import {Link, withRouter} from 'react-router-dom'
 import * as sdiv from '../components/styledDivs'


 class Car extends Component{

   
  delete = () => {
    this.props.destroy(this.props.info.id)
    
  }

  update = () => {

    this.props.update(this.props.info.id)
  }
  
  render(){
    const {mark,id,mileage,bodyType,model,payForDay,productionYear,color} = this.props.info
      return(<sdiv.CarContainer>
  <div>Mark: {mark}</div>
  <div>Milage: {mileage}</div>
  <div>Model: {model}</div>
  <div>Body Type: {bodyType}</div>
  <div> Cost per day: {payForDay}</div>
  <div>Production Year: {productionYear}</div>
  <div>Color: {color}</div>
  <sdiv.ButtonD onClick={this.delete }>Delete</sdiv.ButtonD>
  <Link to={`/cars/${id}`}>edit</Link>
  </sdiv.CarContainer>)}}




  export default withRouter(Car)