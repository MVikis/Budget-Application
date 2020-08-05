import React, { Component } from 'react';

export class EditBudget extends Component {
    constructor(props) {
      super(props);
      this.state = { username: '' };
    }
    mySubmitHandler = (event) => {
      event.preventDefault();
      alert("You are submitting " + this.state.username);
    }
    myChangeHandler = (event) => {
      this.setState({username: event.target.value});
    }
    render() {
      return (
        <form onSubmit={this.mySubmitHandler}>
        
        <p>Enter your name, and submit:</p>
        <input 
          type='text'
          onChange={this.myChangeHandler}
        />
        <input
          type='submit'
        />
        </form>
      );
    }
  }
  