import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Cheese, Menu, Nav, Home } from './components/index';

const Routes = () => {
  return (
    <div>
      <Route exact path='/' component={Home}/>
      <Route path='/menu/' component={Menu}/>
    </div>
  );
};

export default Routes;