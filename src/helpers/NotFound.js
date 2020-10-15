import React, { Component } from 'react'
import accessDenied from '../staticImages/accessDenied'


class NotFound extends Component {

    render() {
        return (
            <div>
                <p>No match for <code>{this.props.location.pathname}</code></p>
                <div>{accessDenied}</div>
            </div>
        )
    }
}
export default NotFound