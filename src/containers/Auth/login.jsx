import React, { Component } from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { getAllUsers } from '../../actions/actions';

import Account from '../Account/account.jsx'

import './styles.css';

function mapStateToProps(state) {
  return {
    userProps: state
  };
}

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
    // console.log(this.props)
  }

  handleSubmit = event => {
    event.preventDefault();
    const user = this.props.userProps.filter(x => x.email === this.state.email && x.password === this.state.password)
    if (user.length === 1) {
      this.setState({ loggedIn: true })
      localStorage.setItem('loggedIn', true);
      localStorage.setItem('user_id', user[0].id)
      localStorage.setItem('has_store', user[0].has_store)
      // this.props.history.push(`/dreams`)
      console.log('hitting?')

    } else {
      // window.alert('Email or Password do not match')
      console.log('email and password do not match');
    };
  }



  render() {
    console.log("hit");
    if (this.state.loggedIn) {
      // console.log(this.props);
      return (
        <Redirect to={{
          pathname: `/users/${localStorage.getItem('user_id')}/userInfo`,
          state: {
            userProps: this.state.currentUser,
            storeProps: this.state.currentStore,
            dreamProps: this.state.currentStoreDreams
          }

        }}
        />
      );
      // <Route exact path="/login" render={() => {



      // }}
      // ></Route>
      // <Switch>
      //   <Redirect from="/login" to={{ pathname: `/users/${localStorage.getItem('user_id')}/userInfo` }} />
      // </Switch>
      // );

    } else {
      return (
        <div className="form-container">
          <div className="form">
            <h2>Login</h2>
            <form className='login-form'>
              <label>Email:
              <input type='email' name='email' placeholder='Enter Email' onChange={this.handleChange} />
              </label>
              <br />
              <label>Password:
              <input type='password' name='password' placeholder='Enter Password' onChange={this.handleChange} />
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



export default connect(mapStateToProps)(Login);