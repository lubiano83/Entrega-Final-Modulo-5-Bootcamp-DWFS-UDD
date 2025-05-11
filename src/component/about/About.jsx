import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../Title';
import Boton from '../Boton';
import ErrorMessage from '../ErrorMessage';

export default function About({ isDarkMode }) {

  try {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 m-8 max-w-xl text-gray-700 flex flex-col justify-center items-center gap-4">
        <div className='flex flex-col justify-center items-center gap-4'>
          <Title isDarkMode={isDarkMode}>Sobre el Proyecto:</Title>
          <h3>
            Esta aplicación muestra información meteorológica actual y datos de luz solar
            (hora de amanecer y atardecer) para distintos lugares de Chile. 
            Utiliza la API de <strong>OpenWeatherMap</strong> para obtener los datos del clima y la API de <strong>Sunrise-Sunset </strong>
            para obtener información sobre la salida y puesta del sol.
          </h3>
          <h3>
            Al seleccionar un lugar, se muestra la temperatura actual, condiciones del tiempo,
            velocidad y dirección del viento, así como también la hora del amanecer y atardecer en formato local.
          </h3>
          <h3>
            El objetivo es ofrecer una herramienta útil y visualmente clara para quienes 
            viven, viajan o practican actividades al aire libre en estas zonas.
          </h3>
        </div>
        <Link to={"/weather"}>
          <Boton isDarkMode={isDarkMode}>Continuar</Boton>
        </Link>
      </div>
    )
  } catch (error) {
    console.log(error.message);
    return <ErrorMessage isDarkMode={isDarkMode} />
  }
};