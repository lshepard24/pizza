import React, { Component } from 'react';
import logo from './img/best_pizza.png';

class App extends Component {
  render() {
    return (
      <div className="header">
        <img src={logo} alt="Logo" id="logo"/>
      </div>
    );
  }
}

export default App;
