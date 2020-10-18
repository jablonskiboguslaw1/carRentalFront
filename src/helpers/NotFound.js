import React, { Component } from 'react'
import accessDenied from '../staticImages/accessdenied.jpg'


class NotFound extends Component {

    render() {
        return (
            <div>
                <p style={{fontWeight: 'bold', fontSize: '25px'}}>No match for <code>{this.props.location.pathname}</code></p>
                <div style= {{textAlign: 'center'}}><img src={accessDenied}></img></div>
            </div>
        )
    }
}
export default NotFound