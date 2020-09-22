import React, { Component } from 'react';
import Cars from './containers/Cars'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CarEditForm from './components/CarEditForm'
import CarAddForm from './components/CarAddForm'
import NotFound from './components/NotFound'
import AuthService from './containers/security/login.service';
import Home from './components/Home'



class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showMangerView: false,
      showEmployeeView: false,
      currentUser : undefined
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();
    if (user) {
      this.setState({
        currentUser: AuthService.getCurrentUser(),
        showEmployeeView: user.roles.includes('EMPLOYEE'),
        showManagerView: user.roles.includes('MANAGER')
      })
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/login' component={Login} />
            <Route exact path='/cars' component={Cars} />
            <Route exact path='/cars/new' component={CarAddForm} />
            <Route path='/cars/:itemId' component={CarEditForm} />

            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
