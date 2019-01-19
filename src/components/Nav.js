import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { PageHeader } from 'react-bootstrap';
import { Home } from './index';
import logo from '../img/best_pizza.png';

class Nav extends Component {
  render() {
    return (
      <div className="header">

        <nav>
          <PageHeader>
            <Link to='/'>
              <img src={logo} alt='Logo' id='logo'/>
            </Link>
            <Link to='/menu/'>Menu</Link>
            <Link to='/story/'>Our Story</Link>
            <Link to='/contact/'>Contact</Link>
          </PageHeader>
        </nav>
        
      </div>
    );
  }
}

export default Nav;
