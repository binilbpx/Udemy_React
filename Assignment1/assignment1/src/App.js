import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserInputAndOutput/UserOutput';
import UserInput from './UserInputAndOutput/UserInput';

class App extends Component{

  state = {username: 'BPX'}; 

  inputHandler = (event) => {
    this.setState({username: event.target.value});
  };
  
  render(){
    return(
      <div className="App">
      <h1>Assignment1</h1>
      <UserInput click={this.inputHandler} username={this.state.username}/>
      <UserOutput username={this.state.username}/>
    </div>
    );
  }
}

export default App;
