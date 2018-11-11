import React, { Component } from 'react';
import './styles.css';
import FeaturedHomeVideo from './FeaturedHomeVideoComponent'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }
  render() {
    console.log('homepage', this.state.loggedIn);
    return (
      <div className="home">
        <FeaturedHomeVideo />
      </div>
    );
  }
}

export default Home;