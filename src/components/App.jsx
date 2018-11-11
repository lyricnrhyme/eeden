import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import ThemeSwitch from 'react-theme-switch';

import { connect } from 'react-redux';
import { getAllDreams, addDream } from '../actions/actions.js'

import DreamList from './DreamList.jsx';
import DreamForm from './DreamForm.jsx';



//~~~ MOCK DB DATA CALLS ~~~~//
// import { getDreamsFromDB, addDreamsFromDB } from '../mock_db/dreams.jsx';

class App extends Component {


  constructor(props) {
    // Pass props to parent class
    super(props)

    // Set initial state
    this.state = {
      dreams: []
    }
  }

  // addDream = (dream) => {
  //   addDreamsFromDB(dream)
  //     .then(dreams => {
  //       if (dreams) {
  //         // Set state will updte the state
  //         this.setState({ dreams })
  //       }
  //     })
  // }


  // Lifecycle method
  componentDidMount() {
    console.log('~~~~~~~~~~~~~~~~');
    this.props.dispatch(getAllDreams());
  }

  newDream(dream) {
    console.log('Dream: ', dream);
    console.log(this.props);
    this.props.dispatch(addDream(dream))
  }

  render() {
    const { dreamProps } = this.props;

    return (
      <div className="App container-fluid">

        <header className="App-header">
          <div id="logoBox"><img src={logo} className="App-logo" alt="logo" /></div>
          <div id="titleBox"><h1 id="appName">Eeden</h1></div>
        </header>
        <br />
        <br />
        <ThemeSwitch preserveRasters />
        <h2>Dreams listed</h2>
        <DreamList props={dreamProps} />
        <br />
        <div>
          <DreamForm newDream={this.newDream} />
        </div>
        <br />
        <br />
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    dreamProps: state
  }
}



export default connect(mapStateToProps)(App);
