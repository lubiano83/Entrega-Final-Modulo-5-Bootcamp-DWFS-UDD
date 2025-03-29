import React from 'react';
import TiempoViews from '../views/TiempoViews';
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
import Selector from "../component/selector/Selector";

const Inicio = () => {

  return (
    <div className='min-h-screen grid grid-rows-[auto_auto_1fr_auto]'>
      <Navbar />
      <Selector />
      <TiempoViews />
      <Footer />
    </div>
  )
}

export default Inicio;