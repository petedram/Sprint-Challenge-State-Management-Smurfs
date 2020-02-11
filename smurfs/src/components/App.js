import React, { Component } from "react";
import "./App.css";


import { connect } from 'react-redux';
import SmurfList from './SmurfList';
import { addSmurf } from '../actions/actions';


class App extends Component {

  state = {
    newName: '',
    newAge: '',
    newHeight: ''
  };

  handleChangesName = e => {
    this.setState({ 
      newName: e.target.value
    });
    console.log('Name: ',this.state.newName);
  };

  handleChangesAge = e => {
    this.setState({ 
      newAge: e.target.value
    });
    console.log('Age: ',this.state.newAge);

  };

  handleChangesHeight = e => {
    this.setState({ 
      newHeight: e.target.value
    });
    console.log('Height: ',this.state.newHeight);

  };



  handleAddMember = e => {
    e.preventDefault();
    // update the redux members store
    this.props.addSmurf(this.state.newName, this.state.newAge, this.state.newHeight);
  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <input
          type="text"
          value={this.state.newName}
          onChange={this.handleChangesName}
          placeholder="name"
        />
        <input
          type="text"
          value={this.state.newAge}
          onChange={this.handleChangesAge}
          placeholder="age"
        />
        <input
          type="text"
          value={this.state.newHeight}
          onChange={this.handleChangesHeight}
          placeholder="height"
        />
        <button onClick={this.handleAddMember}>Add Smurf</button>
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
  {addSmurf})(App);