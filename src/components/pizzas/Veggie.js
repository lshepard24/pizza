import React from 'react';
import { Image } from 'react-bootstrap';

const Veggie = () => {
  return (
    <div className='pizza'>
    <a href='https://www.tasteofhome.com/recipes/grilled-veggie-pizza/'>
      <Image src={'https://greatist.com/sites/default/files/veggie%20toppings.jpg'} alt='veggie' responsive/>
    <h3>Veggie</h3>
    </a>
    </div>
  );
};

export default Veggie;
