import React, { Component } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AuthService from "./services/authService";
import Login from "./services/Login";
import ClientAddForm from "./components/forms/ClientAddForm";
import ClientEditForm from "./components/forms/ClientEditForm";
import Home from "./components/Home";
import Profile from "./components/userInfo";
import ClientPanel from "./components/panels/clientPanel";
import EmployeePanel from "./components/panels/employeePanel";
import ManagerPanel from "./components/panels/managerPanel";
import Cars from './containers/Cars'
import Clients from './containers/Clients'
import CarAddForm from "./components/forms/CarAddForm";
import CarEditForm from "./components/forms/CarEditForm";
import EmployeeAddForm from "./components/forms/EmployeeAddForm";
import Employees from './containers/Employees'
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      AuthService.getCurrentUser() ? (
        <Component {...props} />
      ) : (
          <Redirect to={{
            pathname: 'login',
            state: { from: props.location }
          }}
          />
        )
    } />
)


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
            <PrivateRoute exact path="/cars" component={Cars} />
            <PrivateRoute exact path="/clients" component={Clients} />
            <PrivateRoute exact path="/newcar" component={CarAddForm} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute path='/cars/:itemId' component={CarEditForm} />
            <PrivateRoute path='/client/:itemId' component={ClientEditForm} />
            <PrivateRoute exact path="/newmember" component={EmployeeAddForm} />
            <PrivateRoute exact path="/team" component={Employees} />
            <Route path="/user" component={ClientPanel} />
            <Route path="/mod" component={EmployeePanel} />
            <Route path="/admin" component={ManagerPanel} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;