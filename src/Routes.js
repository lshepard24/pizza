import React from 'react';
import { Route } from 'react-router-dom';
import { Menu, Home, Story, Contact } from './components/index';

const Routes = () => {
  return (
    <div>
      <Route exact path='/' component={Home}/>
      <Route path='/menu/' component={Menu}/>
      <Route path='/story/' component={Story}/>
      <Route path='/contact/' component={Contact}/>
    </div>
  );
};

export default Routes;