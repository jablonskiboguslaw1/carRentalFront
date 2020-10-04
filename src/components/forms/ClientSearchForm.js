import React, { Component } from 'react'
import * as clientApi from '../../helpers/ClientApi'
import Form from 'react-bootstrap/Form'

class ClientSearchForm extends Component {



    handleSubmit = async (event) => {
        event.preventDefault();
        const user = await clientApi.getByUsername(event.target.username.value)
        this.props.history.push('/reservation/client/' + user.id)

    }

    render() {



        return (
            <Form onSubmit={this.handleSubmit}>

                <Form.Group controlId='username'>
                    <Form.Label>Username: </Form.Label>
                    <Form.Control ></Form.Control>
                </Form.Group>

                <button className="btn btn-secondary" type='submit'> Check User Reservations</button>
            </Form>





        )


    }

} export default ClientSearchForm