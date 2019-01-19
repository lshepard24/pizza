import React, { Component } from 'react';
import { Cheese, Pepperoni, Mushroom, Hawaiian, Veggie } from './index';

const Menu = () => {
  return (
    <div className='pizza-container'>
      <Cheese />
      <Pepperoni />
      <Mushroom />
      <Hawaiian />
      <Veggie />
    </div>
  );
};

export default Menu;

