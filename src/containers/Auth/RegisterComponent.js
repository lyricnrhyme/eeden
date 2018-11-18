import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllUsers, addUser } from '../../actions/actions';

class Register extends Component {
  constructor(props) {
    super(props)

    // this.props.dispatch('logout, resetting login status')
    this.state = {
      email: '',
      password: '',
      name: '',
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
    console.log('hi', this.props)
  }

  handleSubmit = event => {
    event.preventDefault();
    const newUser = this.props.userProps.filter(x => x.email === this.state.email)
    if (newUser.length === 1) {
      console.log('email already exists')
    } else {
      this.props.dispatch(addUser(this.state))
      this.setState({registered: true})
      console.log('registered!')
      console.log('hello?', this.props.userProps);
      localStorage.setItem('loggedIn', true);
    };
  }

  render() {
    if (this.state.registered) {
      return (
        <Redirect to={{
          pathname: `/users`,
          state: {
            loggedIn: true
          }
        }} />
      )
    } else {
      return (
        <div className="form-container">
          <div className="form">
          <h2>Register</h2>
            <form className='Register' onSubmit={this.handleSubmit}>
            <label>Email: </label>
              <input type='email' name='email' placeholder='Enter Email' onChange={this.handleChange} required/>
              <br />
            <label>Password: </label>
              <input type='password' name='password' placeholder='Enter Password' onChange={this.handleChange} required/>
              <br />
            <label>Name: </label>
              <input type='text' name='name' placeholder='Enter Name' onChange={this.handleChange}/>
              <br />
              <button>Register</button>
              <Link to='/login'>Cancel</Link>
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
  }
}

export default connect(mapStateToProps)(Register);
