import { createContext, useEffect, useState } from "react";

const ApiContext = createContext(null);

const lugares = [
  { nombre: "Las Trancas", lat: -36.902431, lon: -71.546204 },
  { nombre: "Rapel", lat: -34.13570, lon: -71.45390 },
  { nombre: "Matanzas", lat: -33.938597, lon: -71.847187 },
  { nombre: "Olmué", lat: -32.999965, lon: -71.195589 },
];

export const ApiProvider = ({ children }) => {

  const [ weather, setWeather ] = useState(null);
  const [ day, setDay ] = useState(null);
  const [ ubicacion, setUbicacion ] = useState(null);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    handleClick(lugares[0]);
  }, []);

  const handleClick = async (lugar) => {
    setUbicacion(lugar.nombre);
    const weatherData = await OpenWeatherMap(lugar.lat, lugar.lon);
    const dayInfo = await SunriseSunsetAPI(lugar.lat, lugar.lon);
    setWeather(weatherData);
    setDay(dayInfo);
  };

  const getDireccionViento = (grados) => {

    const direcciones = [
      "Norte",
      "Noreste",
      "Este",
      "Sureste",
      "Sur",
      "Suroeste",
      "Oeste",
      "Noroeste"
    ];
    
    const index = Math.round(grados / 45) % 8;
    return direcciones[index];
  };

  const OpenWeatherMap = async (lat, lon) => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=es`);
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("OpenWeatherMap:", error.message);
    }
  };  

  const SunriseSunsetAPI = async (lat, lon) => {
    try {
      const res = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}&formatted=0`);
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("SunriseSunsetAPI:", error.message);
    }
  };

  return (
    <ApiContext.Provider value={{ OpenWeatherMap, SunriseSunsetAPI, day, weather, handleClick, getDireccionViento, lugares, ubicacion }}>
      {children}
    </ApiContext.Provider>
  );
};

export { ApiContext };