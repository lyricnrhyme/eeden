import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Register extends Component {
  constructor(props) {
    super(props)

    // this.props.dispatch('logout, resetting login status')
    this.state = {
      email: '',
      password: '',
      submitted: false
    }
  }

  handleChange = event => {
    const { target } = event;
    const { name, value } = target;
    this.setState({
      [name]: value
    })
    console.log(name, value);
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ submitted: true });
    const { email, password} = this.state;
    const { dispatch } = this.props;
    if (email && password) {
      // dispatch('login with correct email and password, action will check if it matches')
    }
  }

  render() {
    const { email, password, submitted } = this.state;
    return (
      <div className="Register">
        <form className='Register' onSubmit={this.handleSubmit}>
          <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
            <label>Email:</label>
            <input type='text' name='email' value={email} onChange={this.handleChange}/>
            {submitted && !email && <div>Email is required</div>}
          </div>

          <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
            <label>Password:</label>
            <input type='password' name='password' value={password} onChange={this.handleChange}/>
            {submitted && !password && <div>Password is required</div>}
          </div>

          <button>Register</button>
          <Link to='/login'>Cancel</Link>
        </form>
      </div>
    );
  }
}

export default Register;
