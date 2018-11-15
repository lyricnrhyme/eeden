import React, { Component } from 'react';
import './styles.css';

class DreamInfo extends Component {
  render() {
    const dream = this.props.info
    // console.log("dreaminfo", dream)
    return (
      <div className="dreaminfo">
        <div className="product-images">
        <img src={dream.dream_images} alt="No Images" />
        </div>
        <div className="product-info">
          <h2>{dream.title}</h2>
          <p>${dream.price}</p>
          <p>{dream.description}</p>
          <p>{dream.duration}</p>
          <p>{dream.genre}</p>
        </div>
      </div>
    );
  }
}

export default DreamInfo;