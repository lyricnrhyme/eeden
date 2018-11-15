import React, { Component } from 'react';
// import logo from './logo.svg';

import './styles.css';

class FeaturedProductVideo extends Component {
  render() {
    // console.log("video", this.props.video)
    let video = this.props.video
    return (
      <div className="featuredproductvideo">
        <div id="video-container">
          <video autoPlay={true} loop={true} muted={true} className="fillWidth">
            {/* <source src={this.props.video}/> */}
          </video>
        </div>
      </div>
    );
  }
}

export default FeaturedProductVideo;