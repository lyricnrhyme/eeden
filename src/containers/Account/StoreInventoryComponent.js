import React, { Component } from 'react';
import { getAllStores } from '../../actions/actions';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

class StoreInventory extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    this.props.dispatch(getAllStores());
    // const store = this.props.storeProps.props.filter(x => x.created_by)
  }

  render() {
    console.log('hi', this.props.storeProps.props);
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    storeProps: state
  }
}

export default connect (mapStateToProps)(StoreInventory);
