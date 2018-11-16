import React, { Component } from 'react';
import './styles.css';

class DreamInfo extends Component {
  render() {
    const dream = this.props.info
    console.log("dreaminfo", dream)
    return (
      <div className="dreaminfo">
        <div className="product-images">
        <img src={dream.dream_images} alt="No Images" />
        </div>
        <div className="product-info">
          <h1>{dream.title}</h1>
          <h3 className="product-price txt-drk-blue" >${dream.price}</h3>
          <p className="product-description">{dream.description}</p>
          <div className="product-stats txt-drk-tan txt-sml">
            <p><i className="fas fa-stopwatch"></i>{dream.duration}</p>
            <p><i className="fas fa-theater-masks"></i>{dream.genre}</p>
          </div>
          <form method="GET" action="/login">
            <button type="submit">Add to cart</button>
          </form>
        </div>
      </div>
    );
  }
}

export default DreamInfo;