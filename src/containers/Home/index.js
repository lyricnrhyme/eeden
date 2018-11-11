import React, { Component } from 'react';
import './styles.css';
import FeaturedHomeVideo from './FeaturedHomeVideoComponent'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <FeaturedHomeVideo />
      </div>
    );
  }
}

export default Home;