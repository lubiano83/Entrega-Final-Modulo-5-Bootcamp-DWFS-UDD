import React from 'react';
import Logo from '../Logo';
import useDarkMode from '../../hook/useDarkMode';

const Navbar = ({ linkedin }) => {

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`flex justify-evenly items-center p-2  gap-4 ${isDarkMode ? "bg-amber-700" : "bg-green-700"}`}>
      <Logo />
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        <img src="/linkedin-rounded-border-svgrepo-com.svg" alt="LinkedIn" width={25} height={25} className='hover:scale-110'/>
      </a>
      <img src="/sun-svgrepo-com.svg" alt="modo light" width={30} height={30} onClick={toggleDarkMode} className='hover:scale-110'/>
    </div>
  )
}

export default Navbar;