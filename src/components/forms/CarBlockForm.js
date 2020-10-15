import React, { Component } from 'react'
import { get, updateStatus } from '../../helpers/CarApi'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ChoosenCar from '../ChoosenCar'




class CarBlockForm extends Component {



    state = {
        carItem: null,
        fetched: false,
        dateStart: {},
        dateEnd: {},
        status: null
    }




    carId = () => this.props.match.params.itemId

    componentDidMount = async () => {
        const carItem = await get(this.carId())
        this.setState({ carItem, fetched: true })

    }


    updateCar = async (event) => {
        const { dateStart, dateEnd, carItem,status } = this.state

        await updateStatus({
            car: carItem.id,
            reservationEnd: dateEnd,
            reservationStart: dateStart,
            status: status
        })

    }
    updateStart = (event) => {

        this.setState({ dateStart: event.target.value })
    }
    updateEnd = (event) => {
        this.setState({ dateEnd: event.target.value })
    }

    updateStatus = (event) => {

        this.setState({ status: event.target.value, })
       
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.updateCar(event)
        this.props.history.push('/cars')
        window.location.reload();

    }

    render() {
        const statuses = ["RENTED", "AVAILABLE", "CRUSHED", "UNAVAILABLE", "ONREVIEW", "IN_REPAIR"]
        const { dateStart, dateEnd, carItem } = this.state
        return (<div style={{ textAlign: 'center',color: 'ivory'}}>
            Edit Data Cautiously
            {this.state.fetched
                ? <div>
                    <div style={{ textAlign: 'center' }}> Set Status</div>
                    <ChoosenCar info={carItem} />

                    <Form onSubmit={this.handleSubmit} >
                        <Form.Group controlId='reservationStart'>
                            <Form.Label>Date from: </Form.Label>
                            <Form.Control type="date" onChange={this.updateStart}></Form.Control>

                        </Form.Group>
                        <Form.Group controlId='reservationEnd'>
                            <Form.Label>Date to </Form.Label>
                            <Form.Control type="date" onChange={this.updateEnd} ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="status">
                            <Form.Label>Status</Form.Label>
                            <Form.Control onChange={this.updateStatus} as="select">
                                {statuses.map(status => { return <option key={status}>{status}</option> })}
                            </Form.Control >
                        </Form.Group>
                        {dateEnd >= dateStart ?
                            <div> <Button className="btn btn-primary" type='submit'>Accept</Button>
                            </div> : <div> Second date must be after first</div>}

                    </Form>
                </div> : <div>Loading....</div>} </div>

        )
    }
}

export default CarBlockForm