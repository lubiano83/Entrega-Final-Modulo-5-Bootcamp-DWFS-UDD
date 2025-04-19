import React from 'react';
import About from '../component/about/about';

const AboutViews = ({ isDarkMode }) => {
  return (
    <div className='flex justify-center items-center'>
      <About isDarkMode={isDarkMode} />
    </div>
  )
}

export default AboutViews;
