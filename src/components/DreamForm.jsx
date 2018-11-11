import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addDream } from '../actions/actions.js';

class DreamForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: null,
      description: null,
      price: null,
      genre: null
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(addDream(this.state));
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }



  render() {
    return (
      <div>
        <h2>Add Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label >New Title</label>
            <input onChange={this.handleChange} name="title" type="text" className="form-control" id="formGroupExampleInput" placeholder="Dream Title"></input>
          </div>

          <div className="form-group">
            <label >Description</label>
            <input onChange={this.handleChange} name="description" type="text" className="form-control" id="formGroupExampleInput2" placeholder="Dream Description"></input>
          </div>

          <div className="form-group">
            <label >Price</label>
            <input onChange={this.handleChange} name="price" type="number" className="form-control" id="formGroupExampleInput2" placeholder="Price"></input>
          </div>

          <div className="form-group">
            <label >Genre</label>
            <input onChange={this.handleChange} name="genre" type="text" className="form-control" id="formGroupExampleInput2" placeholder="Dream Genre"></input>
          </div>

          <button type="submit" className="btn btn-primary">Post Dream</button>
        </form>
      </div>

    )
  }
}


export default connect()(DreamForm)
