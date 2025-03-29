import React from 'react';
import Logo from '../Logo';
import useDarkMode from '../../hook/useDarkMode';

const Navbar = () => {

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`flex justify-evenly items-center p-2  gap-4 ${isDarkMode ? "bg-amber-500" : "bg-blue-500"}`}>
      <Logo />
      <a href="https://www.linkedin.com/in/jos%C3%A9-pablo-lubiano-08559b9a/" target="_blank" rel="noopener noreferrer">
        <img src="/linkedin-rounded-border-svgrepo-com.svg" alt="LinkedIn" width={25} height={25} className='hover:scale-110'/>
      </a>
      <img src="/sun-svgrepo-com.svg" alt="modo light" width={30} height={30} onClick={toggleDarkMode} className='hover:scale-110'/>
    </div>
  )
}

export default Navbar;