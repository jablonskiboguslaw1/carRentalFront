import React, { Component } from 'react'
import Employee from '../components/entities/Employee'
import * as employeeApi from '../helpers/EmployeeApi'
import { Link } from 'react-router-dom'
import * as _ from 'ramda'
import * as sdiv from '../components/StyledDivs'
import AuthService from "../services/AuthService";


class Employees extends Component {

  state =
    {
      currentUser: AuthService.getCurrentUser(),
      title: 'TEAM',
      data: []
    }

  findById = (id, arr) => {
    const index = _.findIndex(_.propEq('id', id))(arr)
    return { index, employee: arr[index] }
  }


  deleteEmployee = async (id) => {
    const { data } = this.state
    await employeeApi.destroy(id)
    const { index } = this.findById(id, data)
    this.setState({ data: _.remove(index, 1, data) })

  }


  updateEmployee = async (id) => {
    const { data } = this.state
    await employeeApi.update(id)
    const { index } = this.findById(id, data)
    if(
data[index].position=="MANAGER") {data[index].position="EMPLOYEE"}
else if(
  data[index].position=="EMPLOYEE") {data[index].position="MANAGER"}
    this.setState({ data })

  }
  componentDidMount = async () => {
    
    const data = await employeeApi.getAll()
  
    this.setState({ data })
  }

  render() {
    return (

      <sdiv.Container>
      
        <sdiv.Header >{this.state.title}</sdiv.Header>
        <sdiv.Container>
          {this.state.data.map(employee => <Employee userid={this.state.currentUser.id} info={employee} key={employee.id} destroy={this.deleteEmployee} update={this.updateEmployee} />)}</sdiv.Container>
          <Link to={`/newmember`} >Register new</Link>

      </sdiv.Container>
    )
  }
}
export default Employees