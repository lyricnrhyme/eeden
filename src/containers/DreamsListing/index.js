import React, { Component } from 'react';

import { DreamList } from '../../components/DreamComponent'
import Search from '../../components/SearchComponent'

//~~~ Redux ~~~//
import { connect } from 'react-redux';
import { getAllDreams, getDream } from '../../actions/actions.js'


const mapStateToProps = (state) => {
  return {
    dreamProps: state.props
  }
}

class DreamsListing extends Component {
  constructor(props) {
    // Pass props to parent class
    super(props)
  }

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
      <div className="DreamsListing" >
        <Search />
        <DreamList dreamProps={dreamProps} getDream={this.getDreamById} />
      </div >
    );
  }
}


export default connect(mapStateToProps)(DreamsListing);