import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";



export class Budget extends Component {
   

    constructor(props) {
        super(props);
        this.state = { Budget: [], loading: true };
    }

    componentDidMount() {
      
        this.populateBudgetData();
      
    }

    componentWillUnmount() {
        if (this.chart) {
          this.chart.dispose();
        }
      }
      NavigateToEdit=()=>{
        this.props.history.push("/edit")
      }

    render() {
        am4core.useTheme(am4themes_animated);
        let chart = am4core.create("chartdiv", am4charts.PieChart);
        this.chart = chart;

        let data = [];
        const entries = Object.values(this.state.Budget);
          const propertyNames = Object.keys(this.state.Budget);
        for (let i = 4; i < 8; i++) {
           
            data.push({ value: entries[i], label: propertyNames[i]});
          }
         
        
      this.chart.data = data;
       
       
        // Add and configure Series
        let pieSeries = this.chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "value";
        pieSeries.dataFields.category = "label";
        pieSeries.slices.template.stroke = am4core.color("#fff");
        pieSeries.labels.template.disabled = true;
        pieSeries.slices.template.strokeWidth = 2;
        pieSeries.slices.template.strokeOpacity = 1;
        
        // This creates initial animation
        pieSeries.hiddenState.properties.opacity = 1;
        pieSeries.hiddenState.properties.endAngle = -90;
        pieSeries.hiddenState.properties.startAngle = -90;
        this.chart.legend = new am4charts.Legend();
this.chart.legend.position = "bottom";
this.chart.legend.fill =am4core.color("#fff");
const now = 60;
        return (
            <div>
                  <div className="container">
                      
                <div className="row"> <h2>{this.state.Budget.month}</h2>
                <h2>{this.state.Budget.year}</h2>
                 <div onClick={()=>this.NavigateToEdit} className="btn">Edit</div></div>
           
            <div className="grid-container" >
                <div className="graph budget-container">
                <div id="chartdiv"></div>
                </div>
            
            <div className="accom budget-container">
                <div>
                <h5>Accommodation</h5>
                <p>{this.state.Budget.accommodation} kr</p>
                </div>
                <div>
                <h5>Food</h5>
                <p>{this.state.Budget.food} kr</p>
                </div>
                <div>
                <h5>Entertainment</h5>
                <p>{this.state.Budget.entertainment} kr</p>
                </div>
            </div>

            
            <div className="income budget-container">
                <h4>Income</h4>
                <p>{this.state.Budget.income} kr</p>
            </div>
            <div className="balance budget-container" >
                <h4>Balance</h4>
                <p>{this.state.Budget.balance} kr</p>
                </div>
            </div>
           

            </div>
                
              
            </div>
        );
    }

    async populateBudgetData() {
        const response = await fetch('api/budget/' + this.props.match.params.id);
        const data = await response.json();
        this.setState({ Budget: data, loading: false });
    }
}