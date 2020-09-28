import React, { Component } from 'react'
import Client from '../components/Client'
import styled from 'styled-components'
import * as clientApi from '../helpers/clientApi'
import { Link } from 'react-router-dom'
import * as _ from 'ramda'


const DefaultContainer = styled.div`
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

      <Container>

        <Header >{this.state.title}</Header>
        <DefaultContainer>
          {this.state.data.map(client => <Client info={client} key={client.id} destroy={this.deleteClient} update={this.updateClient} />)}</DefaultContainer>
       

      </Container>
    )
  }
}
export default Clients