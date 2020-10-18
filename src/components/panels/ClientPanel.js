import React, { Component } from "react";

import AuthService from '../../services/AuthService'

import car from '../../staticImages/car1.jpg'

import reservation from '../../staticImages/reservaton.jpg'


export default class ClientPanel extends Component {
 
  state = {
    currentUser: AuthService.getCurrentUser()
  };


render() {
  return (
    <div className="container">
      <header>
        <h3 style={{color:'ivory'}}> Welcome to Client Panel {this.state.currentUser.name} !!!</h3>
      </header>
      <div className="row">
        <div className="col-md-4 offset-md-1">
          <div className="card mb-4 shadow-sm">
            <img src={car} alt="car" className="bd-placeholder-img card-img-top" width="100%" height="225" preserveAspectRatio="xMidYMid slice" focusable="false" />
            <div className="card-body">
              <p className="card-text">Choose Your car.<br/> Have good fun.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <a className="btn btn-sm btn-outline-info" href='/cars' >Show Cars</a>
                
                </div>
              </div>
            </div>
          </div>
        </div>

     
        <div className="col-md-4 offset-md-1">
          <div className="card mb-4 shadow-sm">
            <img src={reservation} alt="team" className="bd-placeholder-img card-img-top" width="100%" height="225" preserveAspectRatio="xMidYMid slice" focusable="false" />
            <div className="card-body">
              <p className="card-text">Yours Reservations and rentals <br /> Check what's going</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <a className="btn btn-sm btn-outline-info" href='/reservations' >Show reservations </a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
}
}