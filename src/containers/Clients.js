import React, { Component } from 'react'
import Client from '../components/entities/Client'
import * as clientApi from '../helpers/ClientApi'
import { Link } from 'react-router-dom'
import * as _ from 'ramda'
import * as sdiv from '../components/StyledDivs'



class Clients extends Component {

  state =
    {
      title: 'Clients',
      data: []
    }

  findById = (id, arr) => {
    const index = _.findIndex(_.propEq('id', id))(arr)
    return { index, client: arr[index] }
  }


  deleteClient = async (id) => {
    const { data } = this.state
    await clientApi.destroy(id)
    const { index } = this.findById(id, data)
    this.setState({ data: _.remove(index, 1, data) })

  }

  componentDidMount = async () => {
    const data = await clientApi.getAll()
    this.setState({ data })

  }
  render() {
    return (

      <sdiv.Container>

        <sdiv.Header >{this.state.title}</sdiv.Header>
        <sdiv.Container>
          {this.state.data.map(client => <Client info={client} key={client.id} destroy={this.deleteClient} update={this.updateClient} />)}</sdiv.Container>
         
          <Link to={`/register`} >Register new</Link>

      </sdiv.Container>
    )
  }
}
export default Clients