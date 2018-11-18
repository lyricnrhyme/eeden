import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllUsers } from '../../actions/actions';

import './styles.css';

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  componentDidMount() {
    this.props.dispatch(getAllUsers());
  }

  handleChange = event => {
    const { target } = event;
    const { name, value } = target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const user = this.props.userProps.filter(x => x.email === this.state.email && x.password === this.state.password)
    if (user.length === 1) {
      this.setState({loggedIn: true})
      console.log('user found, loggedIn');
      localStorage.setItem('loggedIn', true);
      localStorage.setItem('user_id', user[0].id)
    } else {
      console.log('email and password do not match');
    };
  }

  render() {
    if (this.state.loggedIn) {
      return (
        <Redirect to={{
          pathname: '/users'
        }} />
      );
    } else {
      return (
        <div className="form-container">
          <div className="form">
            <h2>Login</h2>
            <form className='login-form'>
            <label>Email:
              <input type='email' name='email' placeholder='Enter Email' onChange={this.handleChange}/>
            </label>
              <br />
            <label>Password:
              <input type='password' name='password' placeholder='Enter Password' onChange={this.handleChange}/>
            </label>
              <br />
              <button type='submit' onClick={this.handleSubmit}>Login</button>
              <div>
              <p>
                Don't have an account? 
              </p>
              <Link className="form-link" to='/register'>
                Register here</Link>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    userProps: state
  };
}

export default connect(mapStateToProps)(Login);