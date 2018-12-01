import React, { Component } from 'react';
import './styles.css';

class FeaturedHomeVideo extends Component {
  render() {
    return (
      <div className="featuredvideo">
        <div id="video-container">
          <div className="video-content">
            <h1>Live any experience</h1>
            <form method="GET" action="/dreams">
              <button type="submit" className="drk">Start experiencing</button>
            </form>

          </div>
          <div className="video-overlay">
          </div>
          <video autoPlay={true} loop={true} muted={true} className="fillWidth">
            <source src="/media/SciFi-1.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }
}

export default FeaturedHomeVideo;