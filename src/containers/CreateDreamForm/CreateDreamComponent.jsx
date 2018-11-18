import React, { Component } from 'react';
import { addDream } from '../../actions/actions';
import { connect } from 'react-redux';

class CreateDream extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: null,
      description: null,
      price: null,
      genre: null,
      duration: null,
      featured_video: null,
      dream_images: null,
      store_id: null //this will need to point to the store its being created for
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(addDream(this.state))
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="form-container">
      <div className="form">
        <h2>Create Dream</h2>

        <form onSubmit={this.handleSubmit}>

          <label>Title:
                <input onChange={this.handleChange} name="title" type="text" />
          </label>
          <br />
          <label>Description:
                <input onChange={this.handleChange} name="description" type="text" />
          </label>
          <br />
          <label>Price:
                <input onChange={this.handleChange} name="price" type="number" />
          </label>
          <br />
          <label>Genre:
                <input onChange={this.handleChange} name="genre" type="text" />
          </label>
          <br />
          <label>Duration:
                <input onChange={this.handleChange} name="duration" type="number" />
          </label>
          <br />
          <label>Featured Video:
                <input onChange={this.handleChange} name="featured_video" type="text" />
          </label>
          <br />
          <label>Dream Preview Image:
                <input onChange={this.handleChange} name="dream_images" type="text" />
          </label>
          <br />
          <label>Store ID (TEMP):
                <input onChange={this.handleChange} name="store_id" type="number" />
          </label>
          <br />
          <button type="submit" value="Submit">Submit</button>
        </form>
      </div>



      </div>
    );
  }
}

export default connect()(CreateDream);

