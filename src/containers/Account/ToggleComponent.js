import React, { Component } from 'react';
import UserInfoComponent from './UserInfoComponent';
import StoreInventoryComponent from './StoreInventoryComponent';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Toggle extends Component {
  render() {
    return (
      <div className="Toggle">
        <Router>
          <Switch>
            <Route path='/userInfo' component={UserInfoComponent} />
            <Route path='/storeInfo' component={StoreInventoryComponent} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Toggle;
