import React from 'react';
import useApi from '../../hook/useApi.hook';

const Menu = () => {

    const { lugares, handleClick } = useApi();

  return (
    <div className="flex items-center justify-around w-full bg-blue-300 gap-4 text-white">
        {lugares.map((lugar, index) => (
        <button key={index} onClick={() => handleClick(lugar)} className='hover:text-gray-700 cursor-pointer'>{lugar.nombre}</button>
        ))}
    </div>
  )
}

export default Menu;