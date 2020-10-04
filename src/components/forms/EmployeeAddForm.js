import React, { Component } from 'react'
import { create } from '../../helpers/EmployeeApi'
import styled from 'styled-components';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'





export const DefaultForm = styled.div`
margin: 0 auto;
max-width: 320px;
`


class EmployeeAddForm extends Component {


    createEmployee = async (event) => {
        await create({
            name: event.target.name.value,
            surname: event.target.surname.value,
            password: event.target.password.value,
            email: event.target.email.value,
            department: event.target.department.value,
            position: event.target.position.value
        })

    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.createEmployee(event)
        this.props.history.push(`/team`)

    }

    render() {


        return (
            <DefaultForm> Register new member of our team
                <Form onSubmit={this.handleSubmit} >
                    <Form.Group controlId='email'>
                        <Form.Label>Email: </Form.Label>
                        <Form.Control></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='name'>
                        <Form.Label>First Name: </Form.Label>
                        <Form.Control ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='surname'>
                        <Form.Label>Last Name: </Form.Label>
                        <Form.Control ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='password'>
                        <Form.Label> Temporary Password: </Form.Label>
                        <Form.Control type='password'></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="position">
                        <Form.Label>Department</Form.Label>
                        <Form.Control as="select">
                            <option>EMPLOYEE</option>
                            <option>MANAGER</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="department">
                        <Form.Label>Department</Form.Label>
                        <Form.Control as="select">
                            <option>Oddział w Gdyni</option>
                            <option>Department 2</option>
                            <option>Department 3</option>
                            <option>Department 4</option>
                            <option>Department 5</option>
                        </Form.Control>
                    </Form.Group>
                    <Button type='submit'> Register</Button>
                </Form>
            </DefaultForm>
        )


    }
}
export default EmployeeAddForm