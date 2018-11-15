import React, { Component } from 'react';
import './styles.css';

class FeaturedProductVideo extends Component {
  

  render() {
    // console.log("video", this.props.video)
    // let video = this.props.video
    return (
      <div className="featuredproductvideo">

          <iframe src="https://player.vimeo.com/video/123504120?title=0&portrait=0&byline=0&autoplay=1&loop=1" frameBorder="0" title="Product video"></iframe>

      </div>
    );
  }
}

export default FeaturedProductVideo;