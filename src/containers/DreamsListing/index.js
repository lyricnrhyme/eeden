import React, { Component } from 'react';
import './styles.css';

import { DreamList } from '../../components/DreamComponent'

//~~~ Redux ~~~//
import { connect } from 'react-redux';
import { getAllDreams, getDream } from '../../actions/actions.js'


const mapStateToProps = (state) => {
  return {
    dreamProps: state.props
  }
}

class DreamsListing extends Component {

  // Lifecycle method
  componentDidMount() {
    console.log('COMPONENT MOUNTED :)');
    this.props.dispatch(getAllDreams());

  }

  getDreamById = (id) => {
    // console.log("Dream Data OnClick: ", id)
    console.log('DREAM LISTING BY ID PROPS: ', this.props);
    this.props.dispatch(getDream(id))
  }

  //~~~ BASEEM WHY DOESNT THIS WORK ~~~//
  // getDreamById(id) {
  //   this.props.dispatch(getDream(id))
  // }


  render() {
    const { dreamProps } = this.props;
    console.log('redux dreamProps: ', { dreamProps });

    return (
      <div className="dreamslisting" >
        <DreamList dreamProps={dreamProps} getDream={this.getDreamById} />
      </div >
    );
  }
}


export default connect(mapStateToProps)(DreamsListing);