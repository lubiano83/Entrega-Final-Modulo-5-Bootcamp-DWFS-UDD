import React from "react";
import useApi from "../../hook/useApi.hook";
import useDarkMode from "../../hook/useDarkMode";

const TiempoList = () => {

  const { getDireccionViento, weather, ubicacion, day } = useApi();
  const { isDarkMode } = useDarkMode();

  return (
    <div className="h-full bg-blue-50 flex flex-col justify-center items-center p-8">
      {weather && day && (
        <div className="bg-white rounded-2xl shadow-lg p-6 mt-8 w-full max-w-md text-gray-700">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Clima en <span className={`${ isDarkMode ? "text-amber-700" : "text-green-700" }`}>{ubicacion}</span>
          </h2>

          <div className="flex items-center justify-center mb-4 w-full aspect-auto">
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt={weather.weather[0].description} />
          </div>

          <ul className="space-y-2 text-base">
            <li>🌡️ <strong>Temperatura:</strong> {weather.main.temp} °C</li>
            <li>📌 <strong>Descripción:</strong> {weather.weather[0].description}</li>
            <li>💧 <strong>Humedad:</strong> {weather.main.humidity}%</li>
            <li>💨 <strong>Viento:</strong> {(weather.wind.speed * 3.6).toFixed(1)} km/h</li>
            <li>🧭 <strong>Dirección:</strong> {getDireccionViento(weather.wind.deg)}</li>
            <li>🌅 <strong>Amanecer:</strong> {new Date(day.results.sunrise).toLocaleTimeString()}</li>
            <li>🌇 <strong>Atardecer:</strong> {new Date(day.results.sunset).toLocaleTimeString()}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default TiempoList;