import React, { Component } from 'react';
import { DreamList } from '../../components/DreamComponent'

//~~~ Redux ~~~//
import { connect } from 'react-redux';
import { getAllDreams } from '../../actions/actions.js'


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
    console.log('~~~~~~~~~~~~~~~~');
    this.props.dispatch(getAllDreams());
  }


  render() {
    const { dreamProps } = this.props;
    console.log('this.props', this.props);
    console.log('redux dreamProps: ', { dreamProps });

    return (
      <div className="DreamsListing"><DreamList props={dreamProps} /></div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dreamProps: state

  }

}

export default connect(mapStateToProps)(DreamsListing);