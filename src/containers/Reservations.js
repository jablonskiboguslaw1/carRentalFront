import React, { Component } from 'react'
import Reservation from '../components/entities/Reservation'
import * as reservationApi from '../helpers/reservationApi'
import * as _ from 'ramda'
import * as sdiv from '../components/styledDivs'




class Reservations extends Component {

  state =
    {
      title: 'Reservations',
      dataStorage:null,
      data: null,

    }


  clientId = () => this.props.match.params.itemId

  findById = (id, arr) => {
    const index = _.findIndex(_.propEq('id', id))(arr)
    return { index, reservation: arr[index] }
  }

refresh=()=>{
  
  this.setState({data : this.state.dataStorage})
}

 findInProgress= () => {
   
  var { data,dataStorage } = this.state
  data=dataStorage
 
 const tempData = []
  data.map(a=>{ if (a.carRental) { if(!a.carReturn) {tempData.push(a) }}})
  this.setState({data: tempData})
}

findNew= () => {
  
  var { data,dataStorage } = this.state
  data=dataStorage

  this.setState({data:_.filter(_.propEq('carRental', null), (data))})
    
}

findClosed= () => {
  
  var { data,dataStorage } = this.state
  data=dataStorage
  const tempData = []
  data.map(a=>{ if (a.carRental) { if(a.carReturn) {tempData.push(a) }}})
  this.setState({data: tempData})
    
}


  cancelReservation = async (id) => {
    const { data } = this.state
    await reservationApi.destroy(id)
    const { index } = this.findById(id, data)
    this.setState({ data: _.remove(index, 1, data) })

  }

 
  componentDidMount = async () => {

    const data = (!this.clientId() ? await reservationApi.getAll() : await reservationApi.getAllByClient(this.clientId()))
    this.setState({ data: data, dataStorage: data })

  }
  render() {
    return (

      <sdiv.Container>

        <sdiv.Header >{this.state.title}</sdiv.Header>
       
          { this.state.data ? <sdiv.Container>
          {this.state.data.map(
            reservation =>
              <sdiv.ContainerInside key={reservation.id} >
                <Reservation info={reservation} cancelReservation={this.cancelReservation} />
              </sdiv.ContainerInside>)}
        </sdiv.Container>: <div></div>}
        <button onClick={this.findNew}>Reserved</button>
        <button onClick={this.findInProgress}>On travel</button>
        <button onClick={this.findClosed}>Closed</button>
        <button onClick={this.refresh}>All</button>

      </sdiv.Container>
    )
  }
}
export default Reservations