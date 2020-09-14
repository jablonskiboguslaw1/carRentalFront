import React, { Component } from 'react'
import Car from '../components/Car'
import styled from 'styled-components'
import * as carApi from '../helpers/carApi'


const CarsContainer = styled.div`
background: #2b2e39;
margin: 0 auto;
max-width: 600px;
padding: 14px;
border-radius:14px;
margin-top: 14px:
`
export const Container = styled.div`
background: #2b2e39;
margin: 0 auto;
max-width: 600px;
padding: 14px;
border-radius:14px;
margin-top: 14px:
`
export const Button = styled.button`
color: #00a7fa;
width: 80px;
height: 32px;
font-size: 1.7em;
border: 0px;
display: flex;
justify-content: center;
background: #232632;
align-items: center;
`

export const Header = styled.h1`
background: #2a2a28;
text-align: center;`


class Cars extends Component {

  state =
    {
      title:'Cars',
      data: []
    }
//HARDCODED
  createCar = async () => {
    

      await carApi.create({
        "bodyType": "sedan",
        "color": "silver",
        "mark": "opel",
        "mileage": 26000,
        "model": "astra",
        "payForDay": 30.0,
        "productionYear": "2005"
      })

    

  }

//HARDCODED
  updateCar = async (id) => {
    

      await carApi.update(id,{
    
        "color": "gold",
     
        "mileage": 5000,
      
        "payForDay": 230.0,
       
      })

    

  }


  

deleteCar = async(id) => {
  await carApi.destroy(id)
}

  componentDidMount = async () => {
    const data = await carApi.getAll()
    this.setState({ data })

  }
  render() {
    return (
      <Container>
        <Header >{this.state.title}</Header>
        <CarsContainer>
          {this.state.data.map(car => <Car info={car} key={car.id} destroy={this.deleteCar}  update= {this.updateCar}/>)}</CarsContainer>
        
        <Button onClick= {() =>{this.createCar(); window.location.reload(false)}}>Add</Button>
        
      </Container>
    )
  }
}
export default Cars