import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import * as sdiv from '../StyledDivs'



class Rental extends Component {


    render() {
        const { id,  dateOfRental, comments } = this.props.info

        return (

            < sdiv.Container >
                <div>Id: {id}</div>
                <div>Date Of Rental: {dateOfRental}</div>
                <div>Comments: {comments}</div>
               
            </sdiv.Container >
        )
    }
}

export default withRouter(Rental)