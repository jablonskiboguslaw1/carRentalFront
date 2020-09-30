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
       
            <div class="container  py-5">
            <div class="jumbotron  text-dark jumbotron-image shadow" style={{'background-image' : `url(https://www.speednik.com/wp-content/blogs.dir/1/files/2018/01/scientists-find-a-key-to-happiness-is-driving-a-fast-car-0001-640x427.jpg)`}}>
              <h2 class="mb-4">
               
                Rent Car from Your Dreams and Travel As Fast As You Like! 
              </h2>
              <p class="mb-4">
                Hey, check this out.
              </p>
              <a href="http://localhost:3000/login" class="btn btn-primary">Start Your Travels</a>
            </div>
            
          </div>
        )
    }
}
export default Home