import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Auth extends Component {
  constructor(props) {
    super(props)

    this.props.dispatch('logout, resetting login status')
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
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ submitted: true });
    const { email, password} = this.state;
    const { dispatch } = this.props;
    if (email && password) {
      dispatch('login with correct email and password, action will check if it matches')
    }
  }

  render() {
    // const { loggingIn } = this.props;
    const { email, password, submitted } = this.state;
    return (
      <div className="Auth">
        <form className='Login' onSubmit={this.handleSubmit}>
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

          <button>Login</button>
          <Link to='/register'>Register</Link>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.autentication;
  return {
    loggingIn
  };
}

const connectedLoginPage = connect(mapStateToProps)(Auth);
export { connectedLoginPage as Auth };