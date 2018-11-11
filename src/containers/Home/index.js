import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }
  render() {
    console.log('homepage', this.state.loggedIn);
    return (
      <div className="Home">
      hello
      </div>
    );
  }
}

export default Home;