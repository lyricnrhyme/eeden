import React, { Component } from 'react';
import { getStoreByUser, getUser, getDreamsByUser } from '../../actions/actions';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import AuthDreamInventory from './AuthDreamInventory';

class StoreInventory extends Component {
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
        <AuthDreamInventory dreamProps={this.state.dreamProps}/>
        <Link to={'/createdream'}><button>Add Dream</button></Link>
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
//   constructor(props) {
//     super(props)
//     this.state = {
//     }
//   }

//   componentDidMount() {
//     this.props.dispatch(getStoreByUser(localStorage.getItem('user_id')));
//     this.props.dispatch(getAllDreams());
//   }
  
//   render() {
//     if (this.props.storeProps !== undefined) {
//       localStorage.setItem('store_id', this.props.storeProps[0].id)
//       console.log('hi', this.props.storeProps);
//       console.log('hi 2', this.props.dreamProps);
//     }
//     const {selectDreams} = this.props.dreamProps.filter(x => x.store_id.id.toString() == localStorage.getItem('store_id'))
//     console.log('selectDreams', selectDreams);
//     return (
//       <div className="Account">
//         <div className='userStore'>
//           <div className='user'>
//             <Link to={`/users/${localStorage.getItem('user_id')}/userInfo`}>User Details {localStorage.getItem('user_id')}</Link>
//           </div>
//           <div className='store'>
//             <Link to={`/users/${localStorage.getItem('user_id')}/storeInfo`}>Store Details</Link>
//           </div>
//         </div>
//         {/* <AuthDreamInventory dreamProps={selectDreams}/> */}
//       </div>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {
//     storeProps: state.currentStore,
//     dreamProps: state.allprops
//   }
// }

export default connect (mapStateToProps)(StoreInventory);
