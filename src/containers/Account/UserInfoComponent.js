import React, { Component } from 'react';

class UserInfo extends Component {
  render() {
    return (
      <div className="UserInfo">
        User Info
        {localStorage.getItem('user_id')}
      </div>
    );
  }
}

export default UserInfo;
