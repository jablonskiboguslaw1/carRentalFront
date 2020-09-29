import React, { Component } from 'react'
import { create } from '../../helpers/clientApi'
import styled from 'styled-components';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'





export const DefaultForm = styled.div`
margin: 0 auto;
max-width: 320px;
`


class ClientAddForm extends Component {

    
    createClient = async (event)=>
    {
        await create({
            name: event.target.name.value,
            surname: event.target.surname.value,
            password: event.target.password.value,
            email: event.target.email.value,
            city: event.target.city.value,
            street: event.target.street.value,
            postCode: event.target.postCode.value
        })
       
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.createClient(event)
        this.props.history.push(`/client`)
    
    }

    render() {


        return (
            <DefaultForm> Put Yours necessary data to start adventure!
                <Form onSubmit={this.handleSubmit} >
                    <Form.Group controlId='email'>
                        <Form.Label>Email: </Form.Label>
                        <Form.Control></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='name'>
                        <Form.Label>First: </Form.Label>
                        <Form.Control ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='surname'>
                        <Form.Label>Last Name: </Form.Label>
                        <Form.Control ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='password'>
                        <Form.Label>Password: </Form.Label>
                        <Form.Control></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='city'>
                        <Form.Label>City: </Form.Label>
                        <Form.Control ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='street'>
                        <Form.Label>Street: </Form.Label>
                        <Form.Control ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='postCode'>
                        <Form.Label>Post Code: </Form.Label>
                        <Form.Control ></Form.Control>
                    </Form.Group>
                    <Button type='submit'> Register</Button>
                </Form>
            </DefaultForm>
        )


    }
}
export default ClientAddForm