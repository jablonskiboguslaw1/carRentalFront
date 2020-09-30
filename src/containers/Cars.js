import React, { Component } from 'react'
import Car from '../components/Car'
import styled from 'styled-components'
import * as carApi from '../helpers/carApi'
import { Link } from 'react-router-dom'
import * as _ from 'ramda'


const CarsContainer = styled.div`
background: #2b2e39;
margin: 0 auto;
max-width: 600px;
padding: 14px;
border-radius:14px;
margin-top: 14px;
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
text-align: center;
color: ivory;
`

class Cars extends Component {

  state =
    {
      title: 'Cars',
      data: []
    }

  findById = (id, arr) => {
    const index = _.findIndex(_.propEq('id', id))(arr)
    return { index, car: arr[index] }
  }


  deleteCar = async (id) => {
    const { data } = this.state
    await carApi.destroy(id)
    const { index } = this.findById(id, data)
    this.setState({ data: _.remove(index, 1, data) })

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
          {this.state.data.map(car => <Car info={car} key={car.id} destroy={this.deleteCar} update={this.updateCar} />)}</CarsContainer>
        <Link to={`/newcar`} >Add new car</Link>

      </Container>
    )
  }
}
export default Cars