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
      
        this.populateWeatherData();
       
    }

   
    

    render() {
        
        let chart = am4core.create("chartdiv", am4charts.PieChart);

        let data = [];
       var json = JSON.stringify(this.state.Budget)
        
        console.log(json)

       chart.data=[
        {"month":"July"},{"income":22000},{"accommodation":5000},{"entertainment":2000},{"food":800},{"balance":0}
       ]
       
        // Add and configure Series
        let pieSeries = chart.series.push(new am4charts.PieSeries());
       
        pieSeries.slices.template.stroke = am4core.color("#fff");
        pieSeries.slices.template.strokeWidth = 2;
        pieSeries.slices.template.strokeOpacity = 1;
        
        // This creates initial animation
        pieSeries.hiddenState.properties.opacity = 1;
        pieSeries.hiddenState.properties.endAngle = -90;
        pieSeries.hiddenState.properties.startAngle = -90;
        return (
            <div>
                  <div className="container">
                <div className="row"> <h2>{this.state.Budget.month}</h2> <div className="btn">Edit</div></div>
           
            <div className="grid-container" >
                <div className="graph budget-container">
                <div id="chartdiv"></div>
                </div>
            
            <div className="accom budget-container">
                <div>
                <h5>Accommodation</h5>
                <p>{this.state.Budget.accommodation}</p>
                </div>
                <div>
                <h5>Food</h5>
                <p>{this.state.Budget.food}</p>
                </div>
                <div>
                <h5>Entertainment</h5>
                <p>{this.state.Budget.entertainment}</p>
                </div>
            </div>

            
            <div className="income budget-container">
                <h4>Income</h4>
                <p>{this.state.Budget.income}</p>
            </div>
            <div className="balance budget-container" >
                <h4>Balance</h4>
                <p>{this.state.Budget.balance}</p>
                </div>
            </div>

            </div>
                
              
            </div>
        );
    }

    async populateWeatherData() {
        const response = await fetch('budget');
        const data = await response.json();
        this.setState({ Budget: data, loading: false });
    }
}