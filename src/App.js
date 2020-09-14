import React, { Component } from 'react';
import Cars from './containers/Cars'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CarEditForm from './components/CarEditForm'
import NotFound from './components/NotFound'



class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
          <Route exact path='/' component={Cars} />
          <Route exact path='/cars/:itemId' component={CarEditForm} />
          <Route  component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
