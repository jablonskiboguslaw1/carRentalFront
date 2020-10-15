import React, { Component } from 'react';
import './home.css';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: ""
        }
    }
    render() {
        return (
       
            <div className="container  py-5">
            <div className="jumbotron  text-dark jumbotron-image shadow" style={{background: 'rgba(0,0,0,0.3)'}}>
              <h2 className="mb-4" style= {{color: 'ivory'}}>
               
                Rent Car of Your Dreams and Travel As Fast As You Like! 
              </h2>
              <p className="mb-4">
                Hey, check this out.
              </p>
              <a href="http://localhost:3000/login" className="btn btn-primary">Start Your Travel</a>
            </div>
            
          </div>
        )
    }
}
export default Home