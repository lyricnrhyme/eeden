import React, { Component } from 'react';

import { StoreList } from '../../components/StoreComponent.jsx';

//~~~ Redux ~~~//
import { connect } from 'react-redux';
import { getAllStores } from '../../actions/actions.js'

const mapStateToProps = (state) => {
  return {
    storeProps: state
  }
}


class StoresListing extends Component {

  constructor(props) {
    // Pass props to parent class
    super(props)

    // Set initial state
    this.state = {
      stores: []
    }
  }


  // Lifecycle method
  componentDidMount() {
    console.log('COMPONENT MOUNTED :)');

    this.props.dispatch(getAllStores());

  }



  render() {
    const { storeProps } = this.props;
    console.log('redux storeProps: ', { storeProps });


    return (
      <div className="StoresListing">
        <StoreList storeProps={storeProps} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(StoresListing);
