import React, { Component } from 'react';
import './styles.css';

import { StoreInfo } from '../../components/StoreInfoComponent';
import { DreamList } from '../../components/DreamComponent'

//~~~ Redux ~~~//
import { connect } from 'react-redux';
import { getStore, getDreamByStore } from '../../actions/actions'

const mapStateToProps = state => {
  // console.log("state", state)
  return {
    storeProps: state.detailedProps,
    dreams: state.currentStoreDreams
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
    this.props.dispatch(getDreamByStore(storeId))
  }


  render() {
    const { storeProps, dreams } = this.props;
    return (
      <div className="storedetail">
        <div className="store-banner">
          <div className="vertcenter txt-drk-blue">
            <StoreInfo storeProps={storeProps} />
          </div>
        </div>
        <div className="store-inventory">
          <DreamList dreamProps={dreams} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(StoreDetail);