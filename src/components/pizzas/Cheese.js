import React from 'react';
import { Image } from 'react-bootstrap';

const Cheese = () => {
  return (
    <div className='pizza'>
    <a href='https://www.dreamstime.com/royalty-free-stock-photography-cheese-pizza-white-background-image79167'>
      <Image src={'http://halalpizzaandfriedchicken.com/wp-content/uploads/2017/07/Traditional-Cheese-Pizza.jpg'} alt='cheese' responsive/>
    <h3>Cheese</h3>
    </a>
    </div>
  );
};

export default Cheese;