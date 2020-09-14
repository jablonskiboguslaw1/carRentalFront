 
 import React, { Component } from 'react';
 import styled from 'styled-components';
 import {Link} from 'react-router-dom'

const CarContainer = styled.div`
background: #343744;
border-radius: 10px;
padding: 14px;
margin-bottom: 7px;

`
export const ButtonD = styled.button`
color: #000000
width: 80px;
height: 26px;
font-size: 1.7em;
border: 2px;
display: flex;
justify-content: center;
background: #FF0000;
align-items: center;
`
export const ButtonR = styled.button`
color: #000000
width: 80px;
height: 26px;
font-size: 1.7em;
border: 2px;
display: flex;
justify-content: center;
background: blue;
align-items: center;
`
 class Car extends Component{

  delete = () => {
    this.props.destroy(this.props.info.id)
  }

  update = () => {

    this.props.update(this.props.info.id)
  }
  
  render(){
    const {mark,id,mileage,bodyType,model,payForDay,productionYear,color} = this.props.info
      return(<CarContainer>
  <div>Mark: {mark}</div>
  <div>Milage: {mileage}</div>
  <div>Model: {model}</div>
  <div>Body Type: {bodyType}</div>
  <div> Cost per day: {payForDay}</div>
  <div>Production Year: {productionYear}</div>
  <div>Color: {color}</div>
  <ButtonD onClick={() =>{this.delete(); window.location.reload(false)}}>Delete</ButtonD>
  <Link to={`/cars/${id}`}>edit</Link>
 {/* <ButtonR onClick={() =>{this.update(); window.location.reload(false)}}>
reset counter & repaint</ButtonR> */}
  </CarContainer>)}}




  export default Car