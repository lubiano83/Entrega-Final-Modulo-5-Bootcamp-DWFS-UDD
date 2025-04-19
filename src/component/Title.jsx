import React from 'react';

const Title = ({ children, isDarkMode }) => {

  return (
    <h1 className={`${isDarkMode ? "text-amber-700" : "text-green-700"} font-bold italic text-2xl`}>
        { children }
    </h1>
  )
}

export default Title;