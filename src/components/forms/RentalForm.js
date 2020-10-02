import React, { Component } from 'react'
import { create } from '../../helpers/rentalApi'
import styled from 'styled-components';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import authService from '../../services/authService'




export const DefaultForm = styled.div`
margin: 0 auto;
max-width: 320px;
`


class RentalForm extends Component {

    reservationId = () => this.props.match.params.itemId

    createRental = async (event)=>
    {
        await create(this.reservationId(),{
            comments: event.target.comments.value,
            employeeId: authService.getCurrentUser().id
            
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.createRental(event)
        this.props.history.push('/reservations')
    
    }

    render() {


        return (
            <DefaultForm> Don't forget to give the keys!
                <Form onSubmit={this.handleSubmit} >
                    <Form.Group controlId='comments'>
                        <Form.Label>Comments: </Form.Label>
                        <Form.Control></Form.Control>
                    </Form.Group>
                    <Button type='submit'> Accept</Button>
                </Form>
            </DefaultForm>
        )


    }
}
export default RentalForm