import React, { Component } from 'react';

export class CreateBudget extends Component {

  constructor(props) {
    super(props);
    this.state = { Budget: []};
  }
  componentDidMount(){
    
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
      fetch('api/budget', {  
        method: 'POST',  
        headers: {
          'Content-Type': 'application/json',
        },
        body: this.state.Budget,  
    }).then((response) => response.json())  
        .then((responseJson) => {  
            this.props.history.push("/budgets");  
        })  
}  
   
  
  ChangeHandler=(event)=>{
    this.setState({[event.target.name]: event.target.value})
 }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <div className="grid-container">
          <div className="budget-container">
              <div className="form-group income">
    <label htmlFor="income">Income</label>
              <input id="income" className="form-control" name='income'
              type='text' placeholder={this.state.Budget.income}
              onChange={this.ChangeHandler} />
        </div>
      </div>
        <div className="form-group accom budget-container">
      <label htmlFor="accom">Accommodation</label>
      <input id="accom" className="form-control" name='accommodation'
        type='text' placeholder={this.state.Budget.accommodation}
        onChange={this.ChangeHandler}/>
      <label htmlFor="food">Food</label>
      <input id="food" className="form-control" name='food'
        type='text' placeholder={this.state.Budget.food}
        onChange={this.ChangeHandler}/>
        <label htmlFor="entertainment">Entertainment</label>
      <input id="entertainment" className="form-control" name='entertainment'
        type='text' placeholder={this.state.Budget.entertainment}
        onChange={this.ChangeHandler}/> </div>
     
      </div>
      <div className="row"> <input className="btn"
        type='submit'/></div>
     
      </form>
    );
  }
  
}
