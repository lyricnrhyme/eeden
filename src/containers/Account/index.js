import React, { Component } from 'react';
import { getUser, getStoreByUser, getDreamsByUser } from '../../actions/actions';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import './styles.css';

import OrderHistory from './OrderHistoryComponent';

class Account extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dreamProps: [],
      userProps: [],
      storeProps: []
    }
  }

  componentDidMount() {
    // console.log('CM fired', this)
    let user = this.props.match.params.user_id;
    this.props.dispatch(getUser(user))
    this.props.dispatch(getStoreByUser(user))
    this.props.dispatch(getDreamsByUser(user))
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.dreamProps !== prevState.dreamProps){
      return { 
        dreamProps: nextProps.dreamProps,
        userProps: nextProps.userProps, 
        storeProps: nextProps.storeProps 
      };
   }
   else return null;
 }


  render() {
    // console.log("Props:", this.props)
    
    const { dreamProps, userProps, storeProps } = this.props;
    console.log("Dreams: ", dreamProps);
    console.log("User: ", userProps);
    console.log("Store: ", storeProps)
    return (
      <div className="Account">
        <div className="user-content">
          <h1>{userProps.name}</h1>
        </div>
        <div className="store-content">
          <h2>{storeProps.title}</h2>
        </div>



        {/* <div className='userStore'>
          <div className='user'>
            <Link to={`/users/${localStorage.getItem('user_id')}/userInfo`}>User Details {localStorage.getItem('user_id')}</Link>
          </div>
          <div className='store'>
            <Link to={`/users/${localStorage.getItem('user_id')}/storeInfo`}>Store Details
            </Link>
          </div>
        </div>
        <OrderHistory /> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log('state', state)
  return {
    userProps: state.currentUser,
    storeProps: state.currentStore[0],
    dreamProps: state.currentStoreDreams
  };
}

export default connect(mapStateToProps)(Account);

Account.defaultProps = {
  storeProps: {
    id: null,
    title: 'Test',
  }
}