import React, { Component } from 'react';
import './styles.css';

class Header extends Component {
  render() {
    if (localStorage.getItem('loggedIn') === 'true') {
      console.log('loggedin?');
      return (
        <div className="header">
          <a href="/"><h1>Eeden</h1></a>
          <a className="drk" href="/stores"><h3>Stores</h3></a>
          <a className="drk" href="/dreams"><h3>Dreams</h3></a>
          <a className="drk" href="/users/:id"><h3>My Profile</h3></a>
          <form method="get" action="/logout">
            <button type="submit">Logout</button>
          </form>
        </div>
  
      );
    } else {
      console.log('loggedout');
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
