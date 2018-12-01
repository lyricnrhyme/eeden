import React, { Component } from 'react';
import { addDream } from '../../actions/actions';
import { connect } from 'react-redux';

class CreateDream extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      description: '',
      price: 0,
      genre: '',
      duration: 0,
      featured_video: '',
      dream_images: '',
      store_id: parseFloat(localStorage.getItem('user_id')),
      user_id: parseFloat(localStorage.getItem('user_id'))
    }
    this.addDream = addDream.bind(this);
  }

  addThisDream = () => {
    this.props.dispatch(this.addDream())
    window.alert('Dream Added');
  }


  handleSubmit = (event) => {
    event.preventDefault();
    // this.addThisDream(this.state);
    console.log('info', this.state);
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
        <h2>Create Experience</h2>

        <form onSubmit={this.handleSubmit}>

          <label>Title:
                <input onChange={this.handleChange} name="title" type="text" required/>
          </label>
          <br />
          <label>Description:
                <input onChange={this.handleChange} name="description" type="text" />
          </label>
          <br />
          <label>Price:
                <input onChange={this.handleChange} name="price" type="number" required/>
          </label>
          <br />
          <label>Genre:
                <input onChange={this.handleChange} name="genre" type="text" required/>
          </label>
          <br />
          <label>Duration:
                <input onChange={this.handleChange} name="duration" type="number" required/>
          </label>
          <br />
          <label>Featured Video:
                <input onChange={this.handleChange} name="featured_video" type="text" required/>
          </label>
          <br />
          <label>Experience Preview Image:
                <input onChange={this.handleChange} name="dream_images" type="text" required/>
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

// CreateDream.defaultProps = {
//   storeProps: {
//     id: null,
//     title: 'Test'
//   },
//   dreamProps: {
//     id: null
//   },
//   userProps: {
//     id: null
//   }
// }

