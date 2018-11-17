import React, { Component } from 'react';
import Toggle from './ToggleComponent';
// import { Link } from 'react-router-dom';
import { getUser } from '../../actions/actions';
import { connect } from 'react-redux';

class Account extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    this.props.dispatch(getUser(localStorage.getItem('user_id')))
  }

  render() {
    console.log('hi?', this.props.userProps.detailedProps);
    return (
      <div className="Account">
        <div className='userStore'>
          <div className='user'>
            User Details
          </div>
          <div className='store'>
            Store Details
          </div>
        </div>
        <Toggle />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userProps: state
  };
}

export default connect (mapStateToProps)(Account);