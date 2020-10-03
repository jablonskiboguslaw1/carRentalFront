import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import * as sdiv from '../styledDivs'
 class CarReturn extends Component {

    render() {


        const { id, employeeId, dateOfReturn, comments, additionalPayments, } = this.props.info

        return (

            <sdiv.Container >
                <div>Id: {id}</div>
                <div>Comments: {comments}</div>
        <div>Aditional payments: {additionalPayments}</div>
            </sdiv.Container >


        )
    }

}  export default withRouter(CarReturn)