import React from 'react';
import Logo from '../Logo';

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <div className='flex justify-center items-center p-2 bg-blue-500 text-white'>
      © {year} Todos los derechos reservados
    </div>
  )
}

export default Footer;