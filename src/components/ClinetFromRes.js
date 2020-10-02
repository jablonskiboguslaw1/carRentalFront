import React, { Component } from 'react';

import * as sdiv from './styledDivs'




class ClientFromRes extends Component {



render(){
    const { name, surname, email, city, street, postCode } = this.props.info
    return (<sdiv.Container>
        <div style={{textAlign:'center'}}>CLIENT</div>
        <div>First Name: {name}</div>
        <div>Last Name: {surname}</div>
        <div>Email: {email}</div>
        <div>City: {city}</div>
        <div>Street: {street}</div>
        <div>Post Code: {postCode}</div>
        
    </sdiv.Container>)
}

}


export default ClientFromRes