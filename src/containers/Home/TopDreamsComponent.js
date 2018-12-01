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
    // console.log('COMPONENT MOUNTED :)');
    this.props.dispatch(getAllDreams());
  }
  render() {
    // console.log(this.props.dreamProps)
    // const { dreamProps } = this.props;
    const topdreams = this.props.dreamProps.slice(0, 6)
    // console.log(topdreams)


    return (
      <div className="topdreams">
        <h2>Recommended Experiences</h2>
        <DreamList dreamProps={topdreams} />
      </div>
    );
  }
}




export default connect(mapStateToProps)(TopDreams);