import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to={"/"}>
      <h1 className='text-lg font-bold text-white hover:text-gray-700 italic'>myWeatherSpots</h1>
    </Link>
  )
}