import React, { Component } from 'react';
import { getUser } from '../../actions/actions';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

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
    return (
      <div className="Account">
        <div className='userStore'>
          <div className='user'>
            <Link to={`/users/${localStorage.getItem('user_id')}/userInfo`}>User Details {localStorage.getItem('user_id')}</Link>
          </div>
          <div className='store'>
            <Link to={`/users/${localStorage.getItem('user_id')}/storeInfo`}>Store Details
            </Link>
          </div>
        </div>
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