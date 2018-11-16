import React, { Component } from 'react';
import './styles.css';

class StoreInfo extends Component {
  render() {
    const store = this.props.storeProps
    console.log('Store Info ;) ', store)

    return (
      <div className="storeinfo">
        <h2>{store.title}</h2>
        <p>{store.description}</p>

      </div>
    );
  }
}

export default StoreInfo;