import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component{

  state = { messageLength: 0, messageContent: '' };

  textChangeHandler = (event) =>{
    this.setState({ messageLength: event.target.value.length, messageContent: event.target.value });
  }

  deleteCharacter = (index) =>{
    let stringToUpdate = this.state.messageContent;
    this.setState({ messageContent: stringToUpdate.slice(0, index) + stringToUpdate.slice(index + 1) });
  }

  render(){

    const charList = (
      <div>
        {this.state.messageContent.split('').map((messageCharacter, index) => {
          return <Char character={messageCharacter} key = {index} deleteChar = {()=> this.deleteCharacter(index)}/>
        })}
      </div>
    );

    return (
      <div className="App">
        <header className="Assignment2">
        </header>
          <h1>Assignment2</h1>
          <input onChange={this.textChangeHandler} value={ this.state.messageContent}/>
          <Validation messageLength={this.state.messageLength} />
          {charList}        
      </div>
    );
  } 
}

export default App;
