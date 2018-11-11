import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: null
    }
  }
  render() {
    console.log('homepage');
    return (
      <div className="Home">
      hello
      </div>
    );
  }
}

export default Home;