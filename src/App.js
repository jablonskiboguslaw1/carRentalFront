import React, { Component } from 'react';
import Cars from './containers/Cars'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CarEditForm from './components/CarEditForm'
import CarAddForm from './components/CarAddForm'
import NotFound from './components/NotFound'



class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
          <Route exact path='/cars' component={Cars} />
          <Route exact path ='/cars/new' component={CarAddForm}/>
          <Route path='/cars/:itemId' component={CarEditForm} />
        
          <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
