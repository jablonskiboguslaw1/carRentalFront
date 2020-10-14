import React, { Component } from 'react'
import { create } from '../../helpers/ReservationApi'
import styled from 'styled-components';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import authService from '../../services/AuthService';
import ChoosenCar from '../ChoosenCar'
import * as carApi from '../../helpers/CarApi'



export const DefaultForm = styled.div`
margin: 0 auto;
max-width: 320px;
`


class ReservationAddForm extends Component {

    state = {
        choosenCar: carApi.get(this.props.match.params.itemId),
        dateStart: {},
        dateEnd: {}
    }

updateStart =(event)=>{
    
    this.setState({dateStart: event.target.value })
}
updateEnd =(event)=>{
    this.setState({dateEnd: event.target.value })
}



    componentDidMount = async () => {
        const choosenCar = await carApi.get(this.props.match.params.itemId)
        this.setState({ choosenCar })

    }


    createReservation = async (event) => {
        await create({
            car: this.props.match.params.itemId,
            client: authService.getCurrentUser().id,
            reservationStart: event.target.reservationStart.value,
            reservationEnd: event.target.reservationEnd.value,
        })

    }

    calculateCost=()=>{
        const dateStart = new Date(this.state.dateStart)
        const dateEnd = new Date(this.state.dateEnd)
      return  ((Math.round(dateEnd-dateStart)/(24*60*60*1000))+1)*this.state.choosenCar.payForDay
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.createReservation(event)
        this.props.history.push(`client/`+ authService.getCurrentUser().id)

    }
   
    
    render() {
        const {dateEnd,choosenCar,dateStart} = this.state;

        return (
           <div style={{color: 'ivory'}}>
            <div style={{textAlign: 'center' }}> Make Reservation</div>
                <ChoosenCar info={choosenCar}  />
                <DefaultForm>
                <Form onSubmit= {this.handleSubmit} >
                        <Form.Group controlId='reservationStart'>
                            <Form.Label>Reservation from </Form.Label>
                            <Form.Control type="date" onChange={this.updateStart}></Form.Control>
                           
                        </Form.Group>
                        <Form.Group controlId='reservationEnd'>
                            <Form.Label>Reservation to </Form.Label>
                            <Form.Control type="date"onChange={this.updateEnd} ></Form.Control>
                        </Form.Group>
                        {dateEnd>=dateStart ?
                       <div> <Button type='submit'>Accept</Button>
                       {Number.isNaN(this.calculateCost()) ? 
                       <div></div>:<div>Approximate cost: {this.calculateCost()}$</div>}</div> : <div> Second date must be after first</div>}
                    </Form>
                </DefaultForm>
            </div>
        )


    }
}
export default ReservationAddForm