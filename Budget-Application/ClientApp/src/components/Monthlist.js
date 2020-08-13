import React, { Component } from 'react';
import { Budget } from './Budget';
import { CreateBudget } from './CreateBudget';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


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
NavigateToCreate=()=>{
  this.props.history.push("/create")
}

CheckDate(){
  var today = new Date()
  if(!this.state.budgets.some(budget => budget.month === today.getMonth()&& budget.year === today.getFullYear()))
  {
    return(   <div className="budget-container accom d-flex flex-column">
    <h4>Budget for {monthNames[today.getMonth()]} {today.getFullYear()}</h4>
  <div  onClick={()=>this.NavigateToCreate()} className="btn">Create</div>
</div>
    )
  }}

MapingBudgets=()=>{
  return(
<div>
{this.state.loading? <p>Loading...</p>:
(<div className="grid-container">
    {this.CheckDate()}
  {this.state.budgets.map(budget => (
   <div key={budget.id} className="budget-container row m-3" >
      <h2>{budget.month}</h2>
      
      <div onClick={()=>this.NavigateComp(budget.id)} className="btn">Edit</div>   
 </div>))} </div>)}
  
  </div>
  )
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