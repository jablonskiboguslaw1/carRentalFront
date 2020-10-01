import React, { Component } from 'react'
import Car from '../components/entities/Car'
import * as sdiv from '../components/styledDivs'
import * as carApi from '../helpers/carApi'
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

      <sdiv.Container>

        <sdiv.Header >{this.state.title}</sdiv.Header>
        <sdiv.Container>
          {this.state.data.map(car => <Car info={car} key={car.id} destroy={this.deleteCar} update={this.updateCar} />)}</sdiv.Container>
        <Link to={`/newcar`} >Add new car</Link>

      </sdiv.Container>
    )
  }
}
export default Cars