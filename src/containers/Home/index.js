import React, { Component } from 'react';
import './styles.css';
import FeaturedHomeVideo from './FeaturedHomeVideoComponent';
import FeaturedStores from './FeaturedStoresComponent';
import TopDreams from './TopDreamsComponent';


class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    // console.log('homepage', this.state.loggedIn);
    return (
      <div className="home">
        <FeaturedHomeVideo />
        <FeaturedStores />
        <TopDreams />
      </div>
    );
  }
}

export default Home;