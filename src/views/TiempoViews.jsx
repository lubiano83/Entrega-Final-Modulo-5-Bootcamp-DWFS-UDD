import React from 'react';
import TiempoList from '../component/tiempo/TiempoList';
import Selector from '../component/selector/Selector';

export default function TiempoViews({ isDarkMode }) {
  return (
    <div>
      <Selector isDarkMode={isDarkMode} />
      <TiempoList isDarkMode={isDarkMode} />
    </div>
  )
}