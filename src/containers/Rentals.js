import React, { Component } from 'react'
import Rental from '../components/entities/Rental'
import * as rentalApi from '../helpers/RentalApi'

import * as _ from 'ramda'
import * as sdiv from '../components/StyledDivs'



class Rentals extends Component {

    state = {
        title: 'Rentals',
        data: []
    }

    employeeId = () => this.props.match.params.itemId


    findById = (id, arr) => {
        const index = _.findIndex(_.propEq('id', id))(arr)
        return { index, rental: arr[index] }
    }


    deleteClient = async (id) => {
        const { data } = this.state
        await rentalApi.destroy(id)
        const { index } = this.findById(id, data)
        this.setState({ data: _.remove(index, 1, data) })

    }

    componentDidMount = async () => {
       
        const data = (!this.employeeId() ? await rentalApi.getAll() : await rentalApi.getAllByEmployee(this.employeeId()))
        this.setState({ data: data })

    }
    render() {
        return (

            <sdiv.Container>

                <sdiv.Header >{this.state.title}</sdiv.Header>

                
                <sdiv.Container>
                    {this.state.data.map(rental => <Rental
                        info={rental} key={rental.id} destroy={this.deleteClient}  />)}</sdiv.Container>



            </sdiv.Container>
        )
    }
}
export default Rentals