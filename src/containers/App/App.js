import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// containers
import Account from '../Account/index';
import Auth from '../Auth/index';
import DreamDetail from '../DreamDetail/index';
import DreamsListing from '../DreamsListing/index';
import Home from '../Home/index';
import StoreDetail from '../StoreDetail/index';
import StoresListing from '../StoresListing/index';
import CreateDreamForm from '../CreateDreamForm/CreateDreamFormComponent';
import CreateStoreForm from '../CreateStoreForm/CreateStoreFormComponent';
import EditDreamForm from '../EditDreamForm/EditDreamFormComponent';
import EditStoreForm from '../EditStoreForm/EditStoreFormComponent';

// components
import Header from '../Header/HeaderComponent';
import Footer from '../Footer/FooterComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Router>
              <Switch>
                <Route path='/' component={Home} />
                <Route path='/account' component={Account} />
                <Route path='/login' component={Auth} />
                <Route path='/dreams/:dreams_id' component={DreamDetail} />
                <Route path='/dreams' component={DreamsListing} />
                <Route path='/stores/:store_id' component={StoreDetail} />
                <Route path='/stores' component={StoresListing} />
                <Route path='/create_dream' component={CreateDreamForm} />
                <Route path='/create_store' component={CreateStoreForm} />
                <Route path='/edit_dream/:dream_id' component={EditDreamForm} />
                <Route path='/edit_store/:store_id' component={EditStoreForm} />
              </Switch>
          </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
