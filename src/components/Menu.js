import React, { Component } from 'react';
import { Cheese, Pepperoni, Mushroom, Hawaiian, Veggie } from './index';

// export default class Menu extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       input: ''
//     };
//   }
//   render() {
//     console.log('this', this.props);
//     return (
//       <div className='pizza-container'>
//         <Cheese/>
//         <Pepperoni />
//         <Mushroom />
//         <Hawaiian />
//         <Veggie />
//       </div>
//     );
//   }
// };

const Menu = () => {
  return (
    <div>
      <Cheese />
      <Pepperoni />
    </div>
  );
};

export default Menu;

