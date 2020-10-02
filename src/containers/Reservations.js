import React, { Component } from 'react'
import Reservation from '../components/entities/Reservation'
import * as reservationApi from '../helpers/reservationApi'
import * as _ from 'ramda'
import * as sdiv from '../components/styledDivs'




class Reservations extends Component {

  state =
    {
      title: 'Reservations',
      data: [],

    }


  clientId = () => this.props.match.params.itemId

  findById = (id, arr) => {
    const index = _.findIndex(_.propEq('id', id))(arr)
    return { index, reservation: arr[index] }
  }


  cancelReservation = async (id) => {
    const { data } = this.state
    await reservationApi.destroy(id)
    const { index } = this.findById(id, data)
    this.setState({ data: _.remove(index, 1, data) })

  }

  if
  componentDidMount = async () => {

    const data = (!this.clientId() ? await reservationApi.getAll() : await reservationApi.getAllByClient(this.clientId()))
    this.setState({ data: data })

  }
  render() {
    return (

      <sdiv.Container>

        <sdiv.Header >{this.state.title}</sdiv.Header>
        <sdiv.Container>
          { !this.state.data ? (
          this.state.data.map(
            reservation =>
              <sdiv.ContainerInside key={reservation.id} >
                <Reservation info={reservation} cancelReservation={this.cancelReservation} />
              </sdiv.ContainerInside>)): <div></div>}
        </sdiv.Container>


      </sdiv.Container>
    )
  }
}
export default Reservations