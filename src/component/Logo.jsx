import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to={"/"}>
      <div className='text-lg font-bold text-white hover:text-gray-700 italic'>myWeatherSpots</div>
    </Link>
  )
}

export default Logo;