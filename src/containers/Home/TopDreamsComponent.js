//~~~~ SHOULD THIS BE A SMART COMPONENT ~~~~//

import React, { Component } from 'react';
import './styles.css';

import { DreamList } from '../../components/DreamComponent';

//~~~ Redux ~~~//
import { connect } from 'react-redux';
import { getAllDreams } from '../../actions/actions.js'


const mapStateToProps = (state) => {
  return {
    dreamProps: state.allprops
  }
}

class TopDreams extends Component {

  componentDidMount() {
    console.log('COMPONENT MOUNTED :)');
    this.props.dispatch(getAllDreams());
  }


  render() {
    const { dreamProps } = this.props;


    return (
      <div className="topdreams">
        <h2>Recommended Dreams</h2>
        <DreamList dreamProps={dreamProps} />
      </div>
    );
  }
}




export default connect(mapStateToProps)(TopDreams);