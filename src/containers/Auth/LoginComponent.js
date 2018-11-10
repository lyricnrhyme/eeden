import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



class Login extends Component {
  constructor(props) {
    super(props)

    // this.props.dispatch('logout, resetting login status')
    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = event => {
    const { target } = event;
    const { name, value } = target;
    this.setState({
      [name]: value
    })
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

  }

  render() {
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

// function mapStateToProps(state) {
//   const { loggingIn } = state.autentication;
//   return {
//     loggingIn
//   };
// }

// export default connect(mapStateToProps)(Login);
export default Login;