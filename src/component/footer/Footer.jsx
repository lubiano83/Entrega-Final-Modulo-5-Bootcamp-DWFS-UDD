import React from 'react';
import useDarkMode from "../../hook/useDarkMode";

const Footer = ({ email, derechos }) => {

  const { isDarkMode } = useDarkMode();


  return (
    <div className={`flex justify-evenly items-center gap-4 px-8 py-4 flex-wrap-reverse text-center text-white ${isDarkMode ? "bg-amber-500" : "bg-blue-500" }`}>
      {derechos}
      <a href="mailto:lubiano83@gmail.com" class="hover:text-gray-700">
        <h3>{email}</h3>
      </a>
    </div>
  )
}

export default Footer;