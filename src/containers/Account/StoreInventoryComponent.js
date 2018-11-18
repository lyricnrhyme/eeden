import React, { Component } from 'react';
import { getStoreByUser, getDreamByStore, getAllDreams } from '../../actions/actions';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import AuthDreamInventory from './AuthDreamInventory';

class StoreInventory extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    this.props.dispatch(getStoreByUser(localStorage.getItem('user_id')));
    this.props.dispatch(getAllDreams());
  }
  
  render() {
    if (this.props.storeProps !== undefined) {
      localStorage.setItem('store_id', this.props.storeProps[0].id)
      console.log('hi', this.props.storeProps);
      console.log('hi 2', this.props.dreamProps);
    }
    const {selectDreams} = this.props.dreamProps.filter(x => x.store_id.id.toString() == localStorage.getItem('store_id'))
    console.log('selectDreams', selectDreams);
    return (
      <div className="Account">
        <div className='userStore'>
          <div className='user'>
            <Link to={`/users/${localStorage.getItem('user_id')}/userInfo`}>User Details {localStorage.getItem('user_id')}</Link>
          </div>
          <div className='store'>
            <Link to={`/users/${localStorage.getItem('user_id')}/storeInfo`}>Store Details</Link>
          </div>
        </div>
        {/* <AuthDreamInventory dreamProps={selectDreams}/> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    storeProps: state.currentStore,
    dreamProps: state.allprops
  }
}

export default connect (mapStateToProps)(StoreInventory);
