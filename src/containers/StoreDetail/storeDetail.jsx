import React, { Component } from 'react';
import StoreInfo from "./StoreInfoComponent";
import './styles.css';


//~~~ Redux ~~~//
import { connect } from 'react-redux';
import { getStore } from '../../actions/actions'

const mapStateToProps = state => {
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
    // console.log(this.props)
    this.props.dispatch(getStore(storeId));
  }





  render() {
    const { storeProps } = this.props;
    return (
      <div className="StoreDetail">
        <StoreInfo storeProps={storeProps} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(StoreDetail);