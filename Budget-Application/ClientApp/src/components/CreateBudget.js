import React, { Component } from 'react';

export class CreateBudget extends Component {


  constructor(props) {
    super(props);
  
  }

  

  render() {

    return (
      <div className="budget-container accom d-flex flex-column">
          <h4>Budget for {this.props.month} {this.props.year}</h4>
        <div className="btn">Create</div>
      </div>
    );
  }
}
