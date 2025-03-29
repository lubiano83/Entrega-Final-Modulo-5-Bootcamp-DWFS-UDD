import React from 'react';
import useDarkMode from "../../hook/useDarkMode";

const Footer = () => {

  const { isDarkMode } = useDarkMode();
  const year = new Date().getFullYear();

  return (
    <div className={`flex justify-evenly items-center gap-4 p-2 text-white ${isDarkMode ? "bg-amber-500" : "bg-blue-500" }`}>
      © {year} Todos los derechos reservados
      <a href="mailto:lubiano83@gmail.com" class="hover:text-gray-700">
        <h3>lubiano83@gmail.com</h3>
      </a>
    </div>
  )
}

export default Footer;