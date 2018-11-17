import React, { Component } from 'react';
import "./styles.css"

import { StoreList } from '../../components/StoreComponent.jsx';

//~~~ Redux ~~~//
import { connect } from 'react-redux';
import { getAllStores } from '../../actions/actions.js'

const mapStateToProps = (state) => {
  return {
    storeProps: state.allprops
  }
}


class StoresListing extends Component {


  // Lifecycle method
  componentDidMount() {
    console.log('COMPONENT MOUNTED :)');
    this.props.dispatch(getAllStores());
  }

  // getStoreById = (id) => {
  //   console.log('STORE LISTING BY ID PROPS: ', id);
  //   this.props.dispatch(getStore(id))
  // }



  render() {
    const { storeProps } = this.props;
    console.log('redux storeProps: ', { storeProps });

    return (
      <div className="storeslisting" >
        <StoreList storeProps={storeProps} />
      </div >
    );
  }
}


export default connect(mapStateToProps)(StoresListing);
