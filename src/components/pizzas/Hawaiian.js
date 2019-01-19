import React from 'react';
import { Image } from 'react-bootstrap';

const Hawaiian = () => {
  return (
    <div className='pizza'>
    <a href='https://www.kingarthurflour.com/recipes/hawaiian-pizza-recipe'>
      <Image src={'http://gulacakery.com/wp-content/uploads/2017/08/bacon-cheddar-and-pineapple-pizza-77250-1.jpg'} alt='hawaiian' responsive/>
    <h3>Hawaiian</h3>
    </a>
    </div>
  );
};

export default Hawaiian;
