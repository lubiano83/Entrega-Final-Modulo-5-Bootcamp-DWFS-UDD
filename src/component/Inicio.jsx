import React from 'react';
import TiempoViews from '../views/TiempoViews';
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
import Menu from './menu/menu';

const Inicio = () => {

  return (
    <div className='min-h-screen grid grid-rows-[auto_auto_1fr_auto]'>
      <Navbar />
      <Menu />
      <TiempoViews />
      <Footer />
    </div>
  )
}

export default Inicio;