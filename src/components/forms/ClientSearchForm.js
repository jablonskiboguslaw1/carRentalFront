import React, { Component } from 'react'
import * as clientApi from '../../helpers/ClientApi'
import Form from 'react-bootstrap/Form'
import Select from 'react-dropdown-select';

class ClientSearchForm extends Component {


    state={
       clients:[]
    }

componentDidMount=async()=>{
    const clients = await clientApi.getAll()
    this.setState({clients})
}

    handleSubmit = async (event) => {
        event.preventDefault();
        const user = await clientApi.getByUsername(event.target.username.value)
        this.props.history.push('/reservation/client/' + user.id)

    }


    render() {



        return (
            <Form onSubmit={this.handleSubmit} style={{ color: 'ivory'}}>

                <Form.Group controlId='username'>
                    <Form.Label>Username: </Form.Label>
                 <Form.Control as="select">
                     {this.state.clients.map(client=> {return<option>{client.email}</option>})}
                 </Form.Control>

                </Form.Group>

                <button className="btn btn-secondary" type='submit'> Check User Reservations</button>
            </Form>





        )


    }

} export default ClientSearchForm