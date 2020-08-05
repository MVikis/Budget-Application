import React, { Component } from 'react';
import { Budget } from './Budget';


export class Monthlist extends Component {
  constructor(props) {
    super(props);
    this.state = { budgets: [] , loading: true};
  }
  componentDidMount() {
      
    this.populateBudgetsData();
}
NavigateComp=(id)=>{
  this.props.history.push("/budget/" + id)
}

MapingBudgets=()=>{
  return(

this.state.loading? <p>Loading...</p>:
  this.state.budgets.map(budget => (
    <div className="budget-container row m-3" key={budget.id}>
      
   
      <h2>{budget.month}</h2>
      
      <div onClick={()=>this.NavigateComp(budget.id)} className="btn">Edit</div>
     

    </div>
    
    


  )).sort((a, b)=> b.year - a.year) )
}

  render() {
    return (
      <div className="container">
        <div className="flex-column">
      {this.MapingBudgets()}
        </div>
       
      </div>
    );
  };
  async populateBudgetsData() {
    const response = await fetch('api/budget/');
    const data = await response.json();
    this.setState({ budgets: data, loading: false});
}
}