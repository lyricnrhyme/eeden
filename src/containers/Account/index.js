import React, { Component } from 'react';
import { getUser, getStoreByUser, getDreamsByUser } from '../../actions/actions';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

class Account extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    // console.log('CM fired', this)
    let user = this.props.match.params.user_id;
    this.props.dispatch(getUser(user))
    this.props.dispatch(getStoreByUser(user))
    this.props.dispatch(getDreamsByUser(user))
  }

  render() {
    console.log("Props:", this.props)
    
    const { dreamProps, userProps, storeProps } = this.props;
    console.log("Dreams: ", dreamProps);
    console.log("User: ", userProps);
    console.log("Store: ", storeProps)
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
  // console.log('state', state)
  return {
    userProps: state.currentUser,
    storeProps: state.currentStore,
    dreamProps: state.currentStoreDreams
  };
}

export default connect(mapStateToProps)(Account);