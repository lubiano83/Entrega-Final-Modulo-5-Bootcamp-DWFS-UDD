import React from 'react';

export default function Message({ children, isDarkMode }) {

  return (
    <div className={`${isDarkMode ? "text-amber-700" : "text-green-700"} font-bold flex justify-center items-center text-2xl`}>
        { children }
    </div>
  )
}