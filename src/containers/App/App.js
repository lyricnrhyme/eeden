import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// containers
import Account from '../Account/index';
import Auth from '../Auth';
import DreamDetail from '../DreamDetail';
import DreamsListing from '../DreamsListing';
import Home from '../Home/index';
import StoreDetail from '../StoreDetail';
import StoresListing from '../StoresListing';
import CreateDreamForm from '../CreateDreamForm';
import CreateStoreForm from '../CreateStoreForm';
import EditDreamForm from '../EditDreamForm';
import EditStoreForm from '../EditStoreForm';

// components
import Header from '../../components/HeaderComponent';
import Footer from '../../components/FooterComponent';

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
