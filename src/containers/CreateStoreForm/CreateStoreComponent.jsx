import React, { Component } from 'react';
import { addStore } from '../../actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    storeProps: state.props
  }
}

class CreateStore extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: null,
      description: null,
      created_by: null //this needs to be the logged in user
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(addStore(this.state))
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  render() {
    console.log('ola')
    return (
      <div className="CreateStoreForm">
        <h1>Create Store</h1>
        <StoreForm addStore={this.addStore} />

      </div>
    );
  }
}

export default connect(mapStateToProps)(CreateStore);
