import React, { Component } from 'react';
import './styles.css';

import { logout } from '../../actions/actions';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    if (localStorage.getItem('loggedIn') === 'true') {
      return (
        <div className="header">
          <a href="/" className="logodesktop"><h1>Eeden</h1></a>
          <a href="/" className="logomobile"><h1>E</h1></a>
          <a className="drk" href="/stores"><h3>Stores</h3></a>
          <a className="drk" href="/dreams"><h3>Dreams</h3></a>
          <a className="drk" href={`/users/${localStorage.getItem('user_id')}/userInfo`}><h3>My Profile</h3></a>
          <form method="get" action="/">
            <button type="submit" onClick={logout}>Logout</button>
          </form>
        </div>
  
      );
    } else {
      return (
        <div className="header">
          <a href="/"><h1>Eeden</h1></a>
          <a className="drk" href="/stores"><h3>Stores</h3></a>
          <a className="drk" href="/dreams"><h3>Dreams</h3></a>
          <form method="get" action="/login">
            <button type="submit">Login</button>
          </form>
        </div>
      );
    }
  }
}

export default Header;
