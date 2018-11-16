import React, { Component } from 'react';
import './styles.css';

class MoreFromStore extends Component {
  render() {
    const store = this.props.info
    console.log("store", store);
    return (
      <div className="morefromstore">
        <h2>More fro</h2>
      </div>
    );
  }
}

export default MoreFromStore;