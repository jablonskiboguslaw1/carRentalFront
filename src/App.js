import React, { Component } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AuthService from "./services/AuthService";
import Login from "./services/Login";
import ClientAddForm from "./components/forms/ClientAddForm";
import ClientEditForm from "./components/forms/ClientEditForm";
import Home from "./components/Home";
import Profile from "./components/Profile";
import ClientPanel from "./components/panels/ClientPanel";
import EmployeePanel from "./components/panels/EmployeePanel";
import Cars from './containers/Cars'
import Clients from './containers/Clients'
import CarAddForm from "./components/forms/CarAddForm";
import CarEditForm from "./components/forms/CarEditForm";
import EmployeeAddForm from "./components/forms/EmployeeAddForm";
import Employees from './containers/Employees'
import ReservationAddForm from "./components/forms/ReservationForm";
import Reservations from './containers/Reservations'
import Rentals from './containers/Rentals'
import RentalForm from "./components/forms/RentalForm";
import CarReturns from "./containers/CarReturns";
import CarReturnForm from './components/forms/CarReturnForm'
import ClientSearchForm from './components/forms/ClientSearchForm'
import CarBlockForm from './components/forms/CarBlockForm'

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
           



            {showEmployeePanel && (
              <li className="nav-item">
                <Link to={"/employee"} className="nav-link">
                  Employee Panel
                </Link>
              </li>
            )}

            {showManagerPanel && (
              <li className="nav-item">
                <Link to={"/employee"} className="nav-link">
                  Manager Panel
                </Link>
              </li>
            )}

            {showClientPanel && (
              <li className="nav-item">
                <Link to={"/client"} className="nav-link">
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
            <PrivateRoute exact path='/cars/:itemId' component={CarEditForm} />
            <PrivateRoute exact path='/searchclient' component={ClientSearchForm}/>
            <PrivateRoute exact path='/client/:itemId' component={ClientEditForm}  />
            <PrivateRoute exact path="/reservations" component={Reservations} />
            <PrivateRoute exact path='/reservation/client/:itemId' component={Reservations}/>
            <PrivateRoute exact path='/reservation/:itemId' component={ReservationAddForm}/>
            <PrivateRoute exact path="/newmember" component={EmployeeAddForm} />
            <PrivateRoute exact path="/team" component={Employees} />
            <PrivateRoute exact path="/rentals" component={Rentals} />
            <PrivateRoute exact path='/rental/:itemId' component={RentalForm}/>
            <PrivateRoute exact path='/rental/employee/:itemId' component={Rentals}/>
            <PrivateRoute exact path='/returns' component={CarReturns}/>
            <PrivateRoute exact path='/returns/:itemId' component={CarReturnForm}/>
            <PrivateRoute exact path='/status/:itemId' component={CarBlockForm}/>

            <Route path="/client" component={ClientPanel} />
            <Route path="/employee" component={EmployeePanel} />
            
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;