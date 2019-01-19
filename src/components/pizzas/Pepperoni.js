import React from 'react';
import { Image } from 'react-bootstrap';

const Pepperoni = () => {
  return (
    <div className='pizza'>
    <a href='https://www.google.com/url?q=http://www.kraftcanada.com/recipes/pepperoni-pizza-204924&source=gmail&ust=1548025923181000&usg=AFQjCNEbKGSZbm3CEzHuDQG4OzRmvZFS-A'>
      <Image src={'https://photos.bigoven.com/recipe/hero/awesome-pepperoni-pizza-7f8696.jpg'} alt='pepperoni' responsive/>
    <h3>Pepperoni</h3>
    </a>
    </div>
  );
};

export default Pepperoni;