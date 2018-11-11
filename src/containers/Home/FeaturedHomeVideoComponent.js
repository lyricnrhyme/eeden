import React, { Component } from 'react';
// import logo from './logo.svg';
import './styles.css';

class FeaturedHomeVideo extends Component {
  render() {
    return (
      // <div className="FeaturedHomeVideo">
      //   <div className="video">
      //     <video src="/media/SciFi-1.mp4" autoPlay="true" loop="true">
      //     </video>
      //   </div>
      //   <div className="video-overlay">
      //     <h1 className="txt-lgt-blue">Create your own dreams</h1>
      //     <button>Start dreaming</button>
      //   </div>
      // </div>

<div className="featuredvideo">
    <div id="video-container">
        <div className="content">
          <h1>Live any dream</h1>
          <form method="GET" action="/dreams">
           <button type="submit" className="drk">Start dreaming</button>
          </form>
          
        </div>
        <div className="overlay">
        </div>
        <video autoplay="true" loop="true" muted="true" class="fillWidth">
            <source src="/media/SciFi-1.mp4" type="video/mp4"/>
        </video>
    </div>
</div>

    );
  }
}

export default FeaturedHomeVideo;
