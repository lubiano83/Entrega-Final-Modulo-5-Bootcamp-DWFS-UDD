import React from 'react';

export default function Title({ children, isDarkMode }) {
  return (
    <h2 className={`${isDarkMode ? "text-amber-700" : "text-green-700"} font-bold text-2xl`}>
      { children }
    </h2>
  )
}