import React from 'react';
import TiempoViews from '../views/TiempoViews';
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
import Selector from "../component/selector/Selector";

const Inicio = () => {

  const year = new Date().getFullYear();
  const email = "lubiano83@gmail.com";
  const derechos = `© ${year} Todos los derechos reservados`;
  const linkedin = "https://www.linkedin.com/in/jos%C3%A9-pablo-lubiano-08559b9a/";

  return (
    <div className='min-h-screen grid grid-rows-[auto_auto_1fr_auto]'>
      <Navbar linkedin={linkedin} />
      <Selector />
      <TiempoViews />
      <Footer email={email} derechos={derechos} />
    </div>
  )
}

export default Inicio;