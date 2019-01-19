import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { PageHeader } from 'react-bootstrap';
import { Cheese } from './components/index';
import logo from './img/best_pizza.png';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="header">
          <PageHeader>
            <img src={logo} alt="Logo" id="logo"/>
            <nav>
              <Link to="/cheese/">Cheese</Link>
            </nav>
          </PageHeader>
          <Route exact path="/cheese/" component={Cheese}/>
        </div>
      </Router>
    );
  }
}

export default App;
