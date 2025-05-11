import React from 'react';
import About from '../component/about/About';

export default function AboutViews({ isDarkMode }) {
  return (
    <div className='flex justify-center items-center'>
      <About isDarkMode={isDarkMode} />
    </div>
  )
}