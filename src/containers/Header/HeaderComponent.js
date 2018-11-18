import React, { Component } from 'react';
import './styles.css';

class Header extends Component {
  render() {
    if (localStorage.getItem('loggedIn') === 'true') {
      return (
        <div className="header">
          <a href="/"><h1>Eeden</h1></a>
          <a className="drk" href="/stores"><h3>Stores</h3></a>
          <a className="drk" href="/dreams"><h3>Dreams</h3></a>
          <a className="drk" href={`/users/${localStorage.getItem('user_id')}/userInfo`}><h3>My Profile</h3></a>
          <form method="get" action="/">
            <button type="submit">Logout</button>
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
