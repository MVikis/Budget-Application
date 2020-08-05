import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import './style.css'
import './custom.css'
import { Budget } from './components/Budget';
import { Monthlist } from './components/Monthlist';


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
            <Route path='/counter' component={Monthlist} />
            <Route path='/budget/:id' render={(props) => <Budget  {...props} />}/>
      </Layout>
    );
  }
}
