import React, { Component } from 'react';
import { addStore } from '../../actions/actions';
import { connect } from 'react-redux';


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
    return (

      <div className="CreateStoreForm">
        <h1>Create Store</h1>

        <form onSubmit={this.handleSubmit}>

          <label>Title:
              <input onChange={this.handleChange} name="title" type="text" />
          </label>
          <br />
          <label>Description:
              <input onChange={this.handleChange} name="description" type="text" />
          </label>
          <br />
          <label>Created By (temp):
              <input onChange={this.handleChange} name="created_by" type="number" />
          </label>
          <br />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default connect()(CreateStore);
