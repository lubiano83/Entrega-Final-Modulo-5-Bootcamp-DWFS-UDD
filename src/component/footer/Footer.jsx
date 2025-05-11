import React from 'react';
import Logo from '../Logo';

export default function Footer({ email, derechos, isDarkMode }) {

  return (
    <div className={`flex justify-evenly items-center gap-4 px-8 py-4 flex-wrap-reverse text-center text-white ${isDarkMode ? "bg-amber-700" : "bg-green-700" }`}>
      {derechos}
      <h3>Contacto:<a href={`mailto:${email}`} className="hover:text-gray-700"> {email}</a></h3>
      <Logo />
    </div>
  )
};