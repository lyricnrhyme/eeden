import React, { Component } from 'react';
import './styles.css';

class Header extends Component {
  render() {
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

export default Header;
