import React from 'react';
import useApi from '../../hook/useApi.hook';
import useDarkMode from "../../hook/useDarkMode";

const Selector = () => {

    const { lugares, handleClick } = useApi();
    const { isDarkMode } = useDarkMode();

    return (
      <div className={`flex items-center justify-around w-full gap-4 p-1 text-white ${isDarkMode ? "bg-amber-500" : "bg-green-500"}`}>
          {lugares.map((lugar, index) => (
          <button key={index} onClick={() => handleClick(lugar)} className='hover:text-gray-700 cursor-pointer'>{lugar.nombre}</button>
          ))}
      </div>
    )
}

export default Selector;