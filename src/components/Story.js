import React from 'react';
import { PageHeader, Image } from 'react-bootstrap';

const Story = (props) => {
  return (
    <div className='story'>
      <PageHeader>Our Story</PageHeader>
      <Image src={'https://image.freepik.com/free-photo/pizza-delivery-man_1368-3788.jpg'} alt='pizza-man'/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  );
};

export default Story;