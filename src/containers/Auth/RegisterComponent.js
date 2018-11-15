import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllUsers } from '../../actions/actions';

class Register extends Component {
  constructor(props) {
    super(props)

    // this.props.dispatch('logout, resetting login status')
    this.state = {
      email: '',
      password: '',
      name: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
      phone: '',
      registered: false
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
    const newUser = this.props.userProps.filter(x => x.email === this.state.email)
    if (newUser.length === 1) {
      console.log('email already exists')
    } else {
      this.setState({registered: true})
      console.log('registered!')
    };
  }

  render() {
    if (this.state.registered) {
      return (
        <Redirect to={{
          pathname: '/',
          state: {
            loggedIn: true
          }
        }} />
      )
    } else {
      return (
        <div className="auth">
          <div className="login">
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
            <label>Address: </label>
              <input type='address' name='address' placeholder='Enter Address' onChange={this.handleChange}/>
              <br />
            <label>City: </label>
              <input type='address' name='city' placeholder='Enter City' onChange={this.handleChange}/>
              <br />
            <label>State: </label>
              <input type='address' name='state' placeholder='Enter State' onChange={this.handleChange}/>
              <br />
            <label>Zipcode: </label>
              <input type='address' name='zipcode' placeholder='Enter Zipcode' onChange={this.handleChange}/>
              <br />
            <label>Phone Number: </label>
              <input type='tel' name='phone' placeholder='Enter Phone Number' onChange={this.handleChange}/>
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
