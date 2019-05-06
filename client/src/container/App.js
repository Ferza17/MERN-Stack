import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {ProtectedRoute} from '../helpers/ProtectedRoute';

import Auth from '../components/auth/auth';
import Dashboard from '../components/Dashboard/Dashboard';
import PageNotFound from '../components/error/PageNotFound';





class App extends Component {

  render() {
    return (
      <Router >
            <Switch>
              <Route exact path="/" component={Auth} />
            <Route 
                  exact 
                  path="/Dashboard"  
                  component={Dashboard}
              />
              <Route component={PageNotFound} />
            </Switch>
      </Router>
    );
  }
}


 

export default App;
