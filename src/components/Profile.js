import React, { Component } from "react";
import AuthService from "../services/AuthService";

export default class Profile extends Component {
  state = {
      currentUser: AuthService.getCurrentUser()
    };
  

  render() {
    const { currentUser } = this.state;

    return (
      <div className="jumbotron" style={{background: 'rgba(0,0,0,0.3)', color: 'ivory'}} >
        <header>
          <h3>Welcome to your profile{"    "}
            <strong>{currentUser.name +" "+ currentUser.surname}</strong> 
          </h3>
        </header>
        <p hidden>
          <strong>Token:</strong>{" "}
          {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p>
        <p>
          <strong>Your Id:</strong>{" "}
          {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          {currentUser.username}
        </p>
        <p>
          <strong>Name:</strong>{" "}
          {currentUser.name}
        </p>
        <p>
          <strong>Surname:</strong>{" "}
          {currentUser.surname}
        </p>
       
        <strong>Authority:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>


        <a href={'/'+ (currentUser.roles[0]=='CLIENT'? 'client' : 'employee' )} className='btn btn-primary'>Get on the wheel</a> 
        </div>
      
    );
  }
}