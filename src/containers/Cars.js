import React, { Component } from 'react'
import Car from '../components/entities/Car'
import * as sdiv from '../components/StyledDivs'
import * as carApi from '../helpers/CarApi'
import { Link } from 'react-router-dom'
import * as _ from 'ramda'
import AuthService from '../services/AuthService'




class Cars extends Component {

  state =
    {
      title: 'Cars',
      data: [],
      currentUser: AuthService.getCurrentUser()
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

      <div>

        <sdiv.Header >{this.state.title}</sdiv.Header>
        <sdiv.Container>
          {this.state.data.map(car => <Car info={car} key={car.id} setStatus={this.setStatus} update={this.updateCar} />)}</sdiv.Container>
        
        {this.state.currentUser.roles[0]!='CLIENT' ?
        <Link to={`/newcar`} className='btn btn-secondary' >Add new car</Link> :<div></div>}

      </div>
    )
  }
}
export default Cars