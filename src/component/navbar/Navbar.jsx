import React from 'react';
import Logo from '../Logo';
import SvgImage from '../SvgImage';
import { Link } from 'react-router-dom';

export default function Navbar({ linkedin, isDarkMode, toggleDarkMode }) {

  return (
    <div className={`flex justify-evenly items-center p-3 gap-4 ${isDarkMode ? "bg-amber-700" : "bg-green-700"}`}>
      <Logo />
      <SvgImage src="/sun-svgrepo-com.svg" alt="modo light" onClick={toggleDarkMode} />
      <Link to={linkedin} target="_blank" rel="noopener noreferrer">
        <SvgImage src="/linkedin-rounded-border-svgrepo-com.svg" alt="LinkedIn" />
      </Link>
    </div>
  )
};