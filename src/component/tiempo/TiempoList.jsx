import React from "react";
import useApi from "../../hook/useApi.hook";
import Message from "../Message";

const TiempoList = ({ isDarkMode }) => {

  const { getDireccionViento, weather, ubicacion, day } = useApi();

  if(!weather || !day || !ubicacion) {
    return (
      <div className="flex justify-center items-center h-full w-full">
        <Message isDarkMode={isDarkMode}>Loading...</Message>
      </div>
    )
  };

  return (
    <div className={`h-full ${isDarkMod ? "bg-amber-50": "bg-green-50"} flex flex-col justify-center items-center pb-8`}>
      <div className="bg-white rounded-2xl shadow-lg p-6 mt-8 w-full max-w-md text-gray-700">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Clima en <span className={`${ isDarkMode ? "text-amber-700" : "text-green-700" }`}>{ubicacion}</span>
        </h2>

        <div className="flex items-center justify-center mb-4 w-full aspect-video">
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt={weather.weather[0].description} />
        </div>

        <ul className="space-y-2 text-base">
          <li>📌 <strong>Descripción:</strong> {weather.weather[0].description}</li>
          <li>🌡️ <strong>Temperatura:</strong> {weather.main.temp} °C</li>
          <li>💧 <strong>Humedad:</strong> {weather.main.humidity}%</li>
          <li>💨 <strong>Viento:</strong> {(weather.wind.speed * 3.6).toFixed(1)} km/h, {getDireccionViento(weather.wind.deg)}</li>
          <li>🌅 <strong>Amanecer:</strong> {new Date(day.results.sunrise).toLocaleTimeString()}</li>
          <li>🌇 <strong>Atardecer:</strong> {new Date(day.results.sunset).toLocaleTimeString()}</li>
        </ul>
      </div>
    </div>
  );
};

export default TiempoList;