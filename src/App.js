import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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
