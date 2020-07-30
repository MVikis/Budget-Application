import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class Budget extends Component {
   

    constructor(props) {
        super(props);
        this.state = { Budget: [], loading: true };
    }

    componentDidMount() {
        this.populateWeatherData();
    }

    static renderForecastsTable(Budget) {
        return (
            <div className="container">
                <div className="row"> <h2>{Budget.month}</h2> <div className="btn">Edit</div></div>
           
            <div className="grid-container" >
                <div className="graph budget-container">
                   
                </div>
            
            <div className="accom budget-container">
                <div>
                <h5>Accommodation</h5>
                <p>{Budget.accommodation}</p>
                </div>
                <div>
                <h5>Food</h5>
                <p>{Budget.food}</p>
                </div>
                <div>
                <h5>Entertainment</h5>
                <p>{Budget.entertainment}</p>
                </div>
            </div>

            
            <div className="income budget-container">
                <h4>Income</h4>
                <p>{Budget.income}</p>
            </div>
            <div className="balance budget-container" >
                <h4>Balance</h4>
                <p>{Budget.accommodation}</p>
                </div>
            </div>

            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Budget.renderForecastsTable(this.state.Budget);

        return (
            <div>
                <h1 id="tabelLabel" >Weather forecast</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    async populateWeatherData() {
        const response = await fetch('budget');
        const data = await response.json();
        this.setState({ Budget: data, loading: false });
    }
}