import React from 'react';
import { Image } from 'react-bootstrap';

const Mushroom = () => {
  return (
    <div className='pizza'>
    <a href='https://www.myrecipes.com/recipe/double-mushroom-pizza'>
      <Image src={'https://s23991.pcdn.co/wp-content/uploads/2009/07/grilled-pizza-pepperoni-mushrooms-recipe-fp.jpg'} alt='mushroom' responsive/>
    <h3>Mushroom</h3>
    </a>
    </div>
  );
};

export default Mushroom;
