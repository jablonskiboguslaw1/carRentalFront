import React, { Component } from 'react'
import * as _ from 'ramda'
import * as carReturnApi from '../helpers/CarReturnApi'
import CarReturn from '../components/entities/CarReturn'
import * as sdiv from '../components/StyledDivs'

class CarReturns extends Component {

    state = {
        title: "Returns",
        data: []
    }

    findById = (id, arr) => {
        const index = _.findIndex(_.propEq('id', id))(arr)
        return { index, carReturn: arr[index] }
    }


    cancelRental = async (id) => {
        const { data } = this.state
        await carReturnApi.destroy(id)
        const { index } = this.findById(id, data)
        this.setState({ data: _.remove(index, 1, data) })

    }

    componentDidMount = async () => {
        const data = await carReturnApi.getAll()
        this.setState({ data })
        console.log(data)
    }

    render() {
        return (
    
          <sdiv.Container>
    
            <sdiv.Header >{this.state.title}</sdiv.Header>
            <sdiv.Container>
              {this.state.data.map(carReturn => <CarReturn info={carReturn} key={carReturn.id} cancel={this.cancelRental}  />)}</sdiv.Container>
            
    
          </sdiv.Container>
        )
      }



}
    export default CarReturns