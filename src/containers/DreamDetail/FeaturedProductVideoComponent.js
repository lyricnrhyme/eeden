import React, { Component } from 'react';
import './styles.css';

class FeaturedProductVideo extends Component {


  render() {
    // console.log("video", this.props)
    // let video = this.props.video
    const video = this.props.video
    console.log("GET VIDEO", video);

    return (
      <div className="featuredproductvideo">

        {/* <iframe src="https://player.vimeo.com/video/123504120?title=0&portrait=0&byline=0&autoplay=1&loop=1" frameBorder="0" title="Product video"></iframe> */}
        <iframe src={this.props.video.featured_video + '?title=0&portrait=0&byline=0&autoplay=1&loop=1'} frameBorder="0" title="Product video"></iframe>
      </div>
    );
  }
}

export default FeaturedProductVideo;