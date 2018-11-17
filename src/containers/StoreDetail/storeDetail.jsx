import React, { Component } from 'react';
import './styles.css';

import { StoreInfo } from '../../components/StoreInfoComponent'

//~~~ Redux ~~~//
import { connect } from 'react-redux';
import { getStore } from '../../actions/actions'

const mapStateToProps = state => {
  console.log("state", state)
  return {
    storeProps: state.detailedProps
  }
}

class StoreDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stores: []
    }
  }

  // Lifecycle method
  componentDidMount() {
    let storeId = this.props.match.params.store_id;
    this.props.dispatch(getStore(storeId));
  }





  render() {
    const { storeProps } = this.props;
    console.log("storedetail- storeProps", storeProps)
    return (
      <div className="StoreDetail">
        <div className="store-banner">
          <StoreInfo  />
        </div>
        <div className="store-inventory">
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(StoreDetail);