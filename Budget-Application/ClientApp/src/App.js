import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import {EditBudget} from './components/EditBudget'
import './style.css'
import './custom.css'
import { Budget } from './components/Budget';
import { Monthlist } from './components/Monthlist';
import { CreateBudget } from './components/CreateBudget';


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
            <Route path='/counter' component={Monthlist} />
            <Route path='/budget/:id' render={(props) => <Budget  {...props} />}/>
            <Route path='/budget/create' component={CreateBudget}/>
            <Route path='/edit/:id' render={(props) => <EditBudget  {...props} />}/>

      </Layout>
    );
  }
}
