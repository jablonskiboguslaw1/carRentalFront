import React, { Component } from 'react'
import { get, update } from '../helpers/carApi'
import styled from 'styled-components';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'





export const DefaultForm = styled.div`
margin: 0 auto;
max-width: 320px;
`


class CarEditForm extends Component {

    state = {
        carItem: null,
        fetched: false

    }


    carId = () => this.props.match.params.itemId
    componentDidMount = async () => {
        const carItem = await get(this.carId())
        this.setState({ carItem, fetched: true })
        
    }


updateCar = async (color,payForDay,mileage) => {


    await update(this.carId(), {
        color: color,
        mileage: mileage,
        payForDay: payForDay
    })

}


handleSubmit = (event) => {
    event.preventDefault();
    this.updateCar(event.target.color.value,event.target.payForDay.value,event.target.mileage.value)
    this.props.history.push('/cars')

}

render() {
    return (
        <DefaultForm>
            Edit Car {this.carId()}
            {this.state.fetched
                ? <DefaultForm>
                    <Form onSubmit={this.handleSubmit}>

                        <Form.Group controlId='mileage'>
                            <Form.Label>Mileage: </Form.Label>
                            <Form.Control defaultValue={this.state.carItem.mileage} ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='color'>
                            <Form.Label>Color: </Form.Label>
                            <Form.Control defaultValue={this.state.carItem.color} ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='payForDay'>
                            <Form.Label>Pay for day: </Form.Label>
                            <Form.Control defaultValue={this.state.carItem.payForDay} ></Form.Control>
                        </Form.Group>
                        <Button type='submit'> Edit</Button>
                    </Form>
                </DefaultForm>



                : <p>Loading...</p>}
        </DefaultForm>
    )
            }

}
export default CarEditForm