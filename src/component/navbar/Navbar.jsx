import React from 'react';
import Logo from '../Logo';
import useDarkMode from '../../hook/useDarkMode';

const Navbar = () => {

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`flex justify-evenly items-center p-2  gap-4 ${isDarkMode ? "bg-amber-500" : "bg-green-500"}`}>
      <Logo />
      <img src="/sun-svgrepo-com.svg" alt="modo light" width={30} height={30} onClick={toggleDarkMode}/>
    </div>
  )
}

export default Navbar;