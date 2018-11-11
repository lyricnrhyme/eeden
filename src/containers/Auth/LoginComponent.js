import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllUsers } from '../../actions/actions';

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      loggedIn: null
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
    // console.log(this.props.userProps, 'test');
  }

  // handleSubmit = event => {
  //   event.preventDefault();

  //   this.setState({ submitted: true });
  //   const { email, password} = this.state;
  //   const { dispatch } = this.props;
  //   if (email && password) {
  //     // dispatch('login with correct email and password, action will check if it matches')
  //   }
  // }

  handleSubmit = event => {
    event.preventDefault();
    const user = this.props.userProps.filter(x => x.email === this.state.email && x.password === this.state.password)
    if (user.length === 1) {
      this.setState({loggedIn: true})
      console.log('user found, loggedIn');
    } else {
      console.log('username and password do not match');
    };
  }

  render() {
    if (this.state.loggedIn) {
      return (
        <Redirect to={{
          pathname: '/',
          state: {
            loggedIn: true
          }
        }} />
      );
    } else {
      return (
        <div className="Login">
          <form className='Login'>
            <input type='text' name='email' placeholder='Enter Email' onChange={this.handleChange}/>
            <br />
            <input type='password' name='password' placeholder='Enter Password' onChange={this.handleChange}/>
            <br />
            <button type='submit' onClick={this.handleSubmit}>Login</button>
            <Link to='/register'>Register</Link>
          </form>
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