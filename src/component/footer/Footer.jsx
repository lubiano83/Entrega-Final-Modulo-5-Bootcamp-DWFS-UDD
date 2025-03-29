import React from 'react';
import useDarkMode from "../../hook/useDarkMode";

const Footer = () => {

  const { isDarkMode } = useDarkMode();
  const year = new Date().getFullYear();

  return (
    <div className={`flex justify-center items-center p-2 text-white ${isDarkMode ? "bg-amber-500" : "bg-blue-500" }`}>
      © {year} Todos los derechos reservados
    </div>
  )
}

export default Footer;