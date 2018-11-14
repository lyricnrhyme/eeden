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

    // Set initial state
    //   this.state = {
    //     dreams: []

    //   }
  }

  // Lifecycle method
  componentDidMount() {
    console.log('COMPONENT MOUNTED :)');
    this.props.dispatch(getAllDreams());

  }

  getDreamById = (id) => {
    // console.log('FIRED')
    // console.log("Dream Data OnClick: ", id)
    // console.log("Dream ID: ", dreams.id)
    console.log(this.props);

    this.props.dispatch(
      getDream(id)
    )
  }


  render() {
    const { dreamProps } = this.props;
    console.log('this.props', this.props);
    console.log('redux dreamProps: ', { dreamProps });
    console.log("HELLO: ", dreamProps);


    return (
      <div className="DreamsListing" >
        <Search />
        <DreamList dreamProps={dreamProps} getDream={this.getDreamById} />
      </div >
    );
  }
}


export default connect(mapStateToProps)(DreamsListing);