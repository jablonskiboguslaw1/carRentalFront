import React, { Component } from "react";
import AuthService from '../../services/authService'
import team from '../../staticImages/Team.jpg'
import car from '../../staticImages/car1.jpg'
import ret from '../../staticImages/return.png'
import clients from '../../staticImages/clients.jpg'
import rental from '../../staticImages/rental.png'
import reservation from '../../staticImages/reservaton.jpg'
export default class ManagerPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser()
    };

  }



  render() {
    return (
      <div className="container">
        <header>
          <h3>Welcome to Manager Panel {this.state.currentUser.name} !!!</h3>
        </header>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img src= {car} alt="car" className="bd-placeholder-img card-img-top" width="100%" height="225" preserveAspectRatio="xMidYMid slice" focusable="false"/>
              <div className="card-body">
                <p className="card-text">Manage the fleet. Add, edit or delete cars.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a  className="btn btn-sm btn-outline-secondary" href='/cars' >Show all</a>
                    <a className="btn btn-sm btn-outline-secondary"  href='/newcar'>Add one</a>
                  </div>
              
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
            <img src= {team} alt="team" className="bd-placeholder-img card-img-top" width="100%" height="225" preserveAspectRatio="xMidYMid slice" focusable="false"  />
              <div className="card-body">
                <p className="card-text">Manage your Team. Make it better. Give them Power.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                  <a  className="btn btn-sm btn-outline-secondary" href='/team' >Show all</a>
                  <a  className="btn btn-sm btn-outline-secondary" href='/newmember' >New One!</a>
                  </div>
              

                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
            <img src= {ret} alt="team" className="bd-placeholder-img card-img-top" width="100%" height="225" preserveAspectRatio="xMidYMid slice" focusable="false"  />
              <div className="card-body">
                <p className="card-text">Manage returns. <br/>Make it or cancel.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                  <a  className="btn btn-sm btn-outline-secondary" href='/returns' >Show all</a>
                   
                  </div>
                
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
            <img src= {clients} alt="team" className="bd-placeholder-img card-img-top" width="100%" height="225" preserveAspectRatio="xMidYMid slice" focusable="false"  />
              <div className="card-body">
                <p className="card-text">Clients  <br/>and details</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                  <a  className="btn btn-sm btn-outline-secondary" href='/clients' >Show all</a>
                   
                  </div>
                
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
            <img src= {rental} alt="team" className="bd-placeholder-img card-img-top" width="100%" height="225" preserveAspectRatio="xMidYMid slice" focusable="false"  />
              <div className="card-body">
                <p className="card-text">Car Rental <br/>Let's the party started .</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                  <a  className="btn btn-sm btn-outline-secondary" href='/reservations' >Show reservation </a>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
            <img src= {reservation} alt="team" className="bd-placeholder-img card-img-top" width="100%" height="225" preserveAspectRatio="xMidYMid slice" focusable="false"  />
              <div className="card-body">
                <p className="card-text">Client's Reservations <br/></p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                  <a  className="btn btn-sm btn-outline-secondary" href='/searchclient' >Show reservations </a>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
              <div className="card-body">
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small className="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
              <div className="card-body">
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small className="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
              <div className="card-body">
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small className="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}