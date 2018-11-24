import React, { Component } from 'react';
import './styles.css';

import { DreamList } from '../../components/DreamComponent'

//~~~ Redux ~~~//
import { connect } from 'react-redux';
import { getAllDreams } from '../../actions/actions.js'


const mapStateToProps = (state) => {
  return {
    dreamProps: state.allprops
  }
}

class DreamsListing extends Component {

  // Lifecycle method
  componentDidMount() {
    // console.log('COMPONENT MOUNTED :)');
    this.props.dispatch(getAllDreams());

  }


  render() {
    const { dreamProps } = this.props;
    // console.log('redux dreamProps: ', { dreamProps });

    return (
      <div className="dreamslisting" >
        <DreamList dreamProps={dreamProps} />

        {/* <DreamList dreamProps={dreamProps} getDream={this.getDreamById} /> */}
      </div >
    );
  }
}


export default connect(mapStateToProps)(DreamsListing);