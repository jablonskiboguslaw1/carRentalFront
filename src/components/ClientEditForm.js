import React, { Component } from 'react'
import { get, update } from '../helpers/clientApi'
import styled from 'styled-components';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


export const DefaultForm = styled.div`
margin: 0 auto;
max-width: 320px;
`
export default class ClientEditForm extends Component {

    state = {
        clientItem: null,
        fetched: false
    }
    
    clientId = () => this.props.match.params.itemId

    componentDidMount = async () => {
        const clientItem = await get(this.clientId())
        this.setState({ clientItem, fetched: true })

    }

   
    updateClient = async (name, surname, city, street, postCode) => {


        await update(this.clientId(), {
            name: name,
            surname: surname,
            city: city,
            street: street,
            postCode: postCode
        })

    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.updateClient(
            event.target.name.value,
            event.target.surname.value,
            event.target.city.value,
            event.target.street.value,
            event.target.postCode.value
        )
        this.props.history.push('/client')
    }

    render() {

        return (<DefaultForm>
            Edit Data Cautiously {this.clientId()}
            {this.state.fetched
                ? <DefaultForm>
                    <Form onSubmit={this.handleSubmit}>

                        <Form.Group controlId='name'>
                            <Form.Label>Name: </Form.Label>
                            <Form.Control defaultValue={this.state.clientItem.name} ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='surname'>
                            <Form.Label>Last Name: </Form.Label>
                            <Form.Control defaultValue={this.state.clientItem.surname} ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='city'>
                            <Form.Label>City: </Form.Label>
                            <Form.Control defaultValue={this.state.clientItem.city} ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='street'>
                            <Form.Label>Street: </Form.Label>
                            <Form.Control defaultValue={this.state.clientItem.street} ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='postCode'>
                            <Form.Label>Post Code: </Form.Label>
                            <Form.Control defaultValue={this.state.clientItem.postCode} ></Form.Control>
                        </Form.Group>
                        <Button type='submit'> Edit</Button>
                    </Form>
                </DefaultForm>

                : <p>Loading...</p>}
        </DefaultForm>




        )




    }


}