import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { Cheese, Pepperoni, Mushroom, Hawaiian, Veggie } from './index';

const Menu = (props) => (
  <div>
    <PageHeader className='pizza-header'>Our Favorites</PageHeader>
    <div className='pizza-container'>
      <Cheese />
      <Pepperoni />
      <Mushroom />
      <Hawaiian />
      <Veggie />
    </div>
  </div>
);

export default Menu;

