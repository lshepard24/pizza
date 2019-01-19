import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { PageHeader } from 'react-bootstrap';
import Routes from './Routes';
import { Nav } from './components/index';
import history from './history';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav history={history}/>
          <Routes />
        </div>
      </Router>
    );
  }
};

export default App;
