import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import ClientAddForm from "./components/ClientAddForm";
import Home from "./components/Home";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import Cars from './containers/Cars'
import CarAddForm from "./components/CarAddForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showEmployeePanel: false,
      showManagerPanel: false,
      showClientPanel: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showClientPanel: user.roles.includes("CLIENT"),
        showEmployeePanel: user.roles.includes("EMPLOYEE"),
        showManagerPanel: user.roles.includes("MANAGER"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showManagerPanel, showEmployeePanel, showClientPanel } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Fire On Pistons
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                START
              </Link>
            </li>



            {showEmployeePanel && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Employee Panel
                </Link>
              </li>
            )}

            {showManagerPanel && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Manager Panel
                </Link>
              </li>
            )}

            {showClientPanel && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  Client Panel
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    Sign Up
                </Link>
                </li>
              </div>
            )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={ClientAddForm} />
            <Route exact path="/cars" component={Cars} />
            <Route exact path="/newcar" component={CarAddForm} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;