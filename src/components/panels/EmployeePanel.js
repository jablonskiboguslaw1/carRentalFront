import React, { Component } from "react";
import AuthService from '../../services/AuthService'
import team from '../../staticImages/Team.jpg'
import car from '../../staticImages/car1.jpg'
import ret from '../../staticImages/return.png'
import clients from '../../staticImages/clients.jpg'
import rental from '../../staticImages/rental.png'
import reservation from '../../staticImages/reservaton.jpg'
export default class EmployeePanel extends Component {
 
    state = {
      currentUser: AuthService.getCurrentUser()
    };
  

  render() {
    console.log(this.state.currentUser)
    return (
      <div className="container">
        <header>
          <h3 style={{color:'ivory'}}> Welcome to Manager Panel {this.state.currentUser.name} !!!</h3>
        </header>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img src={car} alt="car" className="bd-placeholder-img card-img-top" width="100%" height="225" preserveAspectRatio="xMidYMid slice" focusable="false" />
              <div className="card-body">
                <p className="card-text">Manage the fleet. Add, edit or delete cars.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a className="btn btn-sm btn-outline-info" href='/cars' >Show Cars</a>
                    <a className="btn btn-sm btn-outline-info" href='/newcar'>Add one</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {this.state.currentUser.roles[0]=='MANAGER'? (
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img src={team} alt="team" className="bd-placeholder-img card-img-top" width="100%" height="225" preserveAspectRatio="xMidYMid slice" focusable="false" />
              <div className="card-body">
                <p className="card-text">Manage your Team. Make it better. Give them Power.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a className="btn btn-sm btn-outline-info" href='/team' >Show Team</a>
                    <a className="btn btn-sm btn-outline-info" href='/newmember' >New One!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>):<div></div>}
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img src={clients} alt="team" className="bd-placeholder-img card-img-top" width="100%" height="225" preserveAspectRatio="xMidYMid slice" focusable="false" />
              <div className="card-body">
                <p className="card-text">Clients  <br />and details</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a className="btn btn-sm btn-outline-info" href='/clients' >Show Clients</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img src={rental} alt="team" className="bd-placeholder-img card-img-top" width="100%" height="225" preserveAspectRatio="xMidYMid slice" focusable="false" />
              <div className="card-body">
                <p className="card-text">Filter Reservations <br /> Check what's going</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a className="btn btn-sm btn-outline-info" href='/reservations' >Show reservations </a>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img src={reservation} alt="team" className="bd-placeholder-img card-img-top" width="100%" height="225" preserveAspectRatio="xMidYMid slice" focusable="false" />
              <div className="card-body">
                <p className="card-text">Choose Client's Reservations. <br /> Register travel begining.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a className="btn btn-sm btn-outline-info" href='/searchclient' >Show reservations </a>
                    
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img src={ret} alt="team" className="bd-placeholder-img card-img-top" width="100%" height="225" preserveAspectRatio="xMidYMid slice" focusable="false" />
              <div className="card-body">
                <p className="card-text">Manage returns. <br />Make it or cancel.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a className="btn btn-sm btn-outline-info" href='/returns' >Show all</a>
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