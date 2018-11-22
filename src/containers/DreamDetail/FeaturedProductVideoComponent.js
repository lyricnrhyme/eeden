import React, { Component } from 'react';
import './styles.css';

class FeaturedProductVideo extends Component {
  

  render() {
    let video = this.props.video
    console.log("video", video)
    return (
      <div className="featuredproductvideo">
          <iframe src={video + "?title=0&portrait=0&byline=0&autoplay=1&loop=1"} frameBorder="0" title="Product video"></iframe>

      </div>
    );
  }
}

export default FeaturedProductVideo;