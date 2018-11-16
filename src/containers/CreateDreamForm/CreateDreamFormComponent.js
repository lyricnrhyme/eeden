import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class CreateDreamForm extends Component {
  render() {
    if (localStorage.getItem('loggedIn') === 'true') {
      return (
        <div className="CreateDreamForm">
        </div>
      );
    } else {
      return (
        <Redirect to={{
          pathname: '/login'
        }} />
      )
    }
  }
}

export default CreateDreamForm;
