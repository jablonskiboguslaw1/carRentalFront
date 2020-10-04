import React, { Component } from 'react'
import Car from '../components/entities/Car'
import * as sdiv from '../components/StyledDivs'
import * as carApi from '../helpers/CarApi'
import { Link } from 'react-router-dom'
import * as _ from 'ramda'




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


  setStatus = async (id) => {
    
    await carApi.updateStatus(id)
    

  }

  componentDidMount = async () => {
    const data = await carApi.getAll()
    this.setState({ data })

  }
  render() {
    return (

      <sdiv.Container>

        <sdiv.Header >{this.state.title}</sdiv.Header>
        <sdiv.Container>
          {this.state.data.map(car => <Car info={car} key={car.id} setStatus={this.setStatus} update={this.updateCar} />)}</sdiv.Container>
        <Link to={`/newcar`} >Add new car</Link>

      </sdiv.Container>
    )
  }
}
export default Cars