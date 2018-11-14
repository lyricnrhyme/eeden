import React, { Component } from 'react';

import { DreamList } from '../../components/DreamComponent'
import Search from '../../components/SearchComponent'

//~~~ Redux ~~~//
import { connect } from 'react-redux';
import { getAllDreams, getDream } from '../../actions/actions.js'


const mapStateToProps = (state) => {
  return {
    dreamProps: state
  }
}

class DreamsListing extends Component {
  constructor(props) {
    // Pass props to parent class
    super(props)

    // Set initial state
    this.state = {
      dreams: []

    }
  }

  // Lifecycle method
  componentDidMount() {
    console.log('COMPONENT MOUNTED :)');

    this.props.dispatch(getAllDreams());

  }

  getDreamById(dreams) {
    console.log('FIRED')
    console.log("Dream Data OnClick: ", dreams)
    // console.log("Dream ID: ", dreams.id)

    // this.props.dispatch(getDream(dreams))
  }


  render() {
    const { dreamProps } = this.props;
    console.log('this.props', this.props);
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