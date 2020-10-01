 
 import React, { Component } from 'react';
 

 import * as sdiv from '../components/styledDivs'


 class ChoosenCar extends Component{

 
  
  render(){
    const {mark,mileage,bodyType,model,payForDay,productionYear,color} = this.props.info
      return(<sdiv.Container>
        <div style={{textAlign:'center'}}>CHOOSEN CAR</div>
  <div>Mark: {mark}</div>
  <div>Milage: {mileage}</div>
  <div>Model: {model}</div>
  <div>Body Type: {bodyType}</div>
  <div>Cost per day: {payForDay}</div>
  <div>Production Year: {productionYear}</div>
  <div>Color: {color}</div>
  
  </sdiv.Container>)}}




  export default ChoosenCar