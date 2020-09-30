import React, { Component } from 'react'
import Employee from '../components/entities/Employee'
import * as employeeApi from '../helpers/employeeApi'
import { Link } from 'react-router-dom'
import * as _ from 'ramda'
import * as sdiv from '../components/styledDivs'



class Employees extends Component {

  state =
    {
      title: 'TEAM',
      data: []
    }

  findById = (id, arr) => {
    const index = _.findIndex(_.propEq('id', id))(arr)
    return { index, client: arr[index] }
  }


  deleteEmployee = async (id) => {
    const { data } = this.state
    await employeeApi.destroy(id)
    const { index } = this.findById(id, data)
    this.setState({ data: _.remove(index, 1, data) })

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
          {this.state.data.map(employee => <Employee info={employee} key={employee.id} destroy={this.deleteEmployee} update={this.updateEmployee} />)}</sdiv.Container>
          <Link to={`/newclient`} >Register new</Link>

      </sdiv.Container>
    )
  }
}
export default Employees