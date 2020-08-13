import React, { Component } from 'react';

export class EditBudget extends Component {
    constructor(props) {
      super(props);
      this.state = { Budget: [], loading:true };
    }
    componentDidMount(){
      this.populateBudgetData()
    }
    mySubmitHandler = (event) => {
      event.preventDefault();
      fetch('api/budget/'+ this.state.Budget.id, {
        method: 'PUT', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state.Budget),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      console.log(JSON.stringify(this.state.Budget))
    }
    myChangeHandler = (event) => {
      
    }
    render() {
      return (
        <form onSubmit={this.mySubmitHandler}>
        <div className="grid-container">
            <div className="budget-container">
                <div class="form-group income">
      <label htmlFor="income">Income</label>
                <input id="income" className="form-control" name='income'
                type='text' placeholder={this.state.Budget.income}
                onChange={this.myChangeHandler} />
          </div>
        </div>
          <div className="form-group accom budget-container">
        <label htmlFor="accom">Accommodation</label>
        <input id="accom" className="form-control" name='accom'
          type='text' placeholder={this.state.Budget.accommodation}
          onChange={this.myChangeHandler}/>
        <label htmlFor="food">Food</label>
        <input id="food" className="form-control" name='food'
          type='text' placeholder={this.state.Budget.food}
          onChange={this.myChangeHandler}/>
          <label htmlFor="entertainment">Entertainment</label>
        <input id="entertainment" className="form-control" name='entertainment'
          type='text' placeholder={this.state.Budget.entertainment}
          onChange={this.myChangeHandler}/> </div>
       
        </div>
        <div className="row"> <input className="btn"
          type='submit'/></div>
       
        </form>
      );
    }
    async populateBudgetData() {
      const response = await fetch('api/budget/' + this.props.match.params.id);
      const data = await response.json();
      this.setState({ Budget: data, loading: false});
  }
  }
  