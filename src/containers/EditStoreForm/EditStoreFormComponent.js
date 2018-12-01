import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';


//~~~ Redux ~~~//
import { connect } from 'react-redux';
import { getDream, editDream } from '../../actions/actions'


class EditDreamForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: null,
      description: null,
      price: null,
      genre: null,
      duration: null,
      featured_video: null,
      dream_images: null
    }
  }

  componentDidMount() {
    let dreamId = this.props.match.params.dreams_id;
    this.props.dispatch(getDream(dreamId));
  }

  handleSubmit = (event) => {
    let dreamId = this.props.match.params.dream_id;
    event.preventDefault();
    this.props.dispatch(editDream(dreamId, this.state))
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }


  render() {

    return (
      <div className="EditDreamForm">
        <h1>Edit Dream</h1>

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
          <label>Experience Preview Image:
                  <input onChange={this.handleChange} name="dream_images" type="text" />
          </label>
          <br />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }


}

export default connect()(EditDreamForm);