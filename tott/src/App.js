import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav.js';
import { Route, withRouter, NavLink } from 'react-router-dom';
import Home from './components/Home/Home.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path='/' component={Home}/>
      </div>
    );
  }
}

export default withRouter(App);
