import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


//~~~ Redux ~~~//
import { connect } from 'react-redux';
import { getStore, editStore } from '../../actions/actions'



// const mapStateToProps = state => {
//   console.log("App State: ", state);
//   console.log("STATE TO EDIT: ", state.detailedProps);
//   return {
//     storeProps: state.detailedProps
//   }
// }

class EditStoreForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: null,
      description: null
    }
  }

  componentDidMount() {
    let storeId = this.props.match.params.store_id;
    this.props.dispatch(getStore(storeId));
  }


  handleSubmit = (event) => {
    let storeId = this.props.match.params.store_id;
    event.preventDefault();
    this.props.dispatch(editStore(storeId, this.state))
    this.setState({ edited: true })
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }


  render() {

    if (this.state.edited === true) {
      return (
        <Redirect to={"/stores"} />
      )
    } else {
      return (

        <div className="EditStoreForm">


          <h1>Edit Store</h1>
          <form onSubmit={this.handleSubmit}>

            <label>Title:
                <input onChange={this.handleChange} name="title" type="text" />
            </label>
            <br />
            <label>Description:
                <input onChange={this.handleChange} name="description" type="text" />
            </label>
            <br />
            <input type="submit" value="Submit" />
          </form>

        </div>

      );
    }


  }
}

// export default connect(mapStateToProps)(EditStoreForm);
export default connect()(EditStoreForm);