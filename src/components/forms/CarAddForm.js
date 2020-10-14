import React, { Component } from 'react'
import { create } from '../../helpers/CarApi'
import styled from 'styled-components';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'





export const DefaultForm = styled.div`
margin: 0 auto;
max-width: 320px;
`


class CarAddForm extends Component {

    
    createCar = async (event)=>
    {
        await create({
            mark: event.target.mark.value,
            model: event.target.model.value,
            mileage: event.target.mileage.value,
            productionYear: event.target.productionYear.value,
            color: event.target.color.value,
            bodyType: event.target.bodyType.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.createCar(event)
        this.props.history.push('/cars')
    
    }

    render() {
     

        return (
            <DefaultForm style={{ color: 'ivory'}}> Add car to fleet
                <Form onSubmit={this.handleSubmit} >
                    <Form.Group controlId='mark'>
                        <Form.Label>Mark: </Form.Label>
                        <Form.Control></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='model'>
                        <Form.Label>Model: </Form.Label>
                        <Form.Control ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='bodyType'>
                        <Form.Label>Body type: </Form.Label>
                        <Form.Control ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='mileage'>
                        <Form.Label>Mileage: </Form.Label>
                        <Form.Control></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='color'>
                        <Form.Label>Color: </Form.Label>
                        <Form.Control ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='productionYear'>
                        <Form.Label>Production year: </Form.Label>
                        <Form.Control ></Form.Control>
                    </Form.Group>
                    <Button type='submit'> add</Button>
                </Form>
            </DefaultForm>
        )


    }
}
export default CarAddForm