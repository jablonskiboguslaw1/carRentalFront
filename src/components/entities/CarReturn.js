import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import * as sdiv from '../StyledDivs'
 class CarReturn extends Component {

    render() {


        const { id, comments, additionalPayments, } = this.props.info

        return (

            <sdiv.Container >
                <div>Id: {id}</div>
                <div>Comments: {comments}</div>
        <div>Aditional payments: {additionalPayments}</div>
            </sdiv.Container >


        )
    }

}  export default withRouter(CarReturn)