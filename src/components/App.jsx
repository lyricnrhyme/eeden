import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import ThemeSwitch from 'react-theme-switch';

import { connect } from 'react-redux';
import { getAllDreams } from '../actions/actions.js'

import DreamList from './DreamList.jsx';


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
    console.log(this.props);
    console.log('~~~~~~~~~~~~~~~~');
    this.props.dispatch(getAllDreams());
  }



  // componentDidMount() {
  //   getDreamsFromDB()
  //     .then(dreams => {
  //       // Set state with result
  //       this.setState({ dreams })
  //     }, function () {
  //       console.log('this.state updated: ', this.state);
  //     })
  // }






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
      </div>
    );

    // function DreamList(props) {
    //   return props.dreams.map(dream => <Dream key={dream.id} t={dream.title} d={dream.description}
    //     p={dream.price} g={dream.genre} />)
    // }

    // function Dream(props) {
    //   return <div className="d-flex flex-column dream-container" >
    //     <div className="p-1">Title: {props.t}</div>
    //     <div className="p-1">{props.d}</div>
    //     <div className="p-1">${props.p}</div>
    //     <div className="p-1">Genre: {props.g}</div>

    //   </div >

    // }
  }
}


const mapStateToProps = state => {
  return {
    dreamProps: state
  }
}



export default connect(mapStateToProps)(App);
