import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// containers
import Account from '../Account/index';
// import Auth from '../Auth';
import DreamDetail from '../DreamDetail/index.jsx';
import DreamsListing from '../DreamsListing/index';
import Home from '../Home/index';
import StoreDetail from '../StoreDetail/storeDetail.jsx';
import StoresListing from '../StoresListing/storeListing';
import CreateDreamForm from '../CreateDreamForm/CreateDreamComponent.jsx';
import CreateStoreForm from '../CreateStoreForm/CreateStoreComponent.jsx';
import EditDreamForm from '../EditDreamForm/EditDreamFormComponent';
import EditStoreForm from '../EditStoreForm/EditStoreFormComponent';
import Login from '../Auth';
import Register from '../Auth/RegisterComponent';

// components
import Header from '../Header/HeaderComponent';
import Footer from '../Footer/FooterComponent';

class App extends Component {
  render() {
    if (localStorage.getItem('loggedIn') === 'true') {
      return (
        <div className="App">
          <Header />
          <Router className="maincontent">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/users/:user_id' component={Account} />
              <Route path='/dreams/:dreams_id' component={DreamDetail} />
              <Route path='/dreams' component={DreamsListing} />
              <Route path='/stores/:store_id' component={StoreDetail} />
              <Route path='/stores' component={StoresListing} />
              <Route path='/createdream' component={CreateDreamForm} />
              <Route path='/createstore' component={CreateStoreForm} />
              <Route path='/edit_dream/:dream_id' component={EditDreamForm} />
              <Route path='/edit_store/:store_id' component={EditStoreForm} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
            </Switch>
          </Router>
          <div className="background"></div>
          <Footer />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Header />
          <Router className="maincontent">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/account' component={Login} />
              <Route path='/dreams/:dreams_id' component={DreamDetail} />
              <Route path='/dreams' component={DreamsListing} />
              <Route path='/stores/:store_id' component={StoreDetail} />
              <Route path='/stores' component={StoresListing} />
              <Route path='/createdream' component={Login} />
              <Route path='/createstore' component={Login} />
              <Route path='/edit_dream/:dream_id' component={Login} />
              <Route path='/edit_store/:store_id' component={Login} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
            </Switch>
          </Router>
          <div className="background"></div>
          <Footer />
        </div>
      );
    }
  }
}

export default App;