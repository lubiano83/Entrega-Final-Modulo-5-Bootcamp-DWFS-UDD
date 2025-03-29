import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className='text-lg font-bold text-white'>My Weather Spots</div>
    </Link>
  )
}

export default Logo;