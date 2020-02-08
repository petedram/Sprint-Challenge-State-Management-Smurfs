import React, { Component } from "react";
import "./App.css";


import { connect } from 'react-redux';
import SmurfList from './SmurfList';



//import and add components

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}


export default connect(
  mapStateToProps,
  {})(App);