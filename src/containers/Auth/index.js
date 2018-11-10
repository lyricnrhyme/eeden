import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from './LoginComponent';
import Register from './RegisterComponent';

class Auth extends Component {
  render() {
    return (
      <div className="Auth">
        <Router>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Auth;