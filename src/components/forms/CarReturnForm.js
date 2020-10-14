import React, { Component } from 'react'
import { create } from '../../helpers/CarReturnApi'
import styled from 'styled-components';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import authService from '../../services/AuthService'




export const DefaultForm = styled.div`
margin: 0 auto;
max-width: 320px;
`


class ReturnForm extends Component {

    reservationId = () => this.props.match.params.itemId
    

    createReturn = async (event)=>
    {
        await create(this.reservationId(),{
            comments: event.target.comments.value,
            employeeId: authService.getCurrentUser().id,
            additionalPayments: event.target.additionalPayments.value
            
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.createReturn(event)
        this.props.history.push('/reservations/summary/'+this.reservationId())
    
    }

    render() {


        return (
            <DefaultForm style={{ color: 'ivory'}}> Take the keys back!!
                <Form onSubmit={this.handleSubmit} >
                    <Form.Group controlId='comments'>
                        <Form.Label>Comments: </Form.Label>
                        <Form.Control></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='additionalPayments'>
                        <Form.Label>Additional Payments: </Form.Label>
                        <Form.Control type='number'></Form.Control>
                    </Form.Group>
                    <Button type='submit'> Accept</Button>
                </Form>
            </DefaultForm>
        )


    }
}
export default ReturnForm