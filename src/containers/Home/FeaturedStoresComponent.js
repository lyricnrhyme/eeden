import React, { Component } from 'react';
import './styles.css';

import { StoreList } from '../../components/StoreComponent.jsx';

//~~~ Redux ~~~//
import { connect } from 'react-redux';
import { getAllStores } from '../../actions/actions.js'

const mapStateToProps = (state) => {
  console.log("State", state)
  return {
    storeProps: state.allStores
  }
}

class FeaturedStores extends Component {

  // Lifecycle method
  componentDidMount() {
    this.props.dispatch(getAllStores());
  }

  render() {
    console.log("Stores", this.props)
    const featstores = this.props.storeProps.slice(0,3)
    // console.log("FeatStores",featstores)
    return (
      <div className="featuredstores">
        <h2>Featured Stores</h2>
          <StoreList storeProps={featstores} /> 
      </div>
    );
  }
}

export default connect(mapStateToProps)(FeaturedStores);