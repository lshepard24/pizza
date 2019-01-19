import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { PageHeader, Nav, NavItem } from 'react-bootstrap';
import logo from '../img/best_pizza.png';

class NavBar extends Component {
  render() {
    return (
      <div className="header">
        <nav>
        <PageHeader>
          <Nav>
          <span>
          <Link to='/'>
            <img src={logo} alt='Logo' id='logo'/>
          </Link>

          <Link to='/menu/' className='nav-link'>Menu</Link>
          <Link to='/story/' className='nav-link'>Story</Link>
          <Link to='/order/' className='nav-link'>Order</Link>
          <Link to='/contact/' className='nav-link'>Contact</Link>
          </span>
          </Nav>
        </PageHeader>
        </nav>
      </div>
    );
  }
}

export default NavBar;
