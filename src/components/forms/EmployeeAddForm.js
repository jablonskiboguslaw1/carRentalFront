import React, { Component } from 'react'
import { create } from '../../helpers/EmployeeApi'
import styled from 'styled-components';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import * as departmentApi from '../../helpers/DepartmentApi'





export const DefaultForm = styled.div`
margin: 0 auto;
max-width: 320px;
`


class EmployeeAddForm extends Component {


    state ={

        departments:[]
    }


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
componentDidMount=async()=>{
    const deps = await departmentApi.getAll()
this.setState({departments: deps})





}
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.createEmployee(event)
        this.props.history.push(`/team`)
        window.location.reload();
    }

    render() {


        return (
            
            <DefaultForm style={{ color: 'ivory'}}> Register new member of our team
                <Form onSubmit={this.handleSubmit} >
                    {console.log(this.state.departments)}
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
        {this.state.departments.map((dep) => {return <option>{dep.name}</option>})}
       
       
                        </Form.Control>
                    </Form.Group>
                    <Button type='submit'> Register</Button>
                </Form>
            </DefaultForm>
        )


    }
}
export default EmployeeAddForm