import React, { Component } from 'react';
import './styles.css';

class DreamInfo extends Component {
  render() {
    const dream = this.props.dreamProps
    console.log("dreaminfo", dream)
    return (
      <div className="dreaminfo">
        <div className="product-images">

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