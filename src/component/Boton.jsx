import React from 'react';

const Boton = ({ children, isDarkMode }) => {

  return (
    <button className={`${isDarkMode ? "bg-amber-700" : "bg-green-700"} px-4 py-1 border-2 border-white shadow-sm shadow-gray-700 rounded-lg font-bold text-white`}>
      { children }
    </button>
  )
}

export default Boton;
