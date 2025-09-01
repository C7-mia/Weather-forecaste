import { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import ForecastCard from "../components/ForecastCard";
import { getWeather, getForecast } from "../utils/api";

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  const handleSearch = async (city) => {
    try {
      const data = await getWeather(city);
      const forecastData = await getForecast(city);
      setWeather(data);
      setForecast(forecastData);
    } catch (err) {
      alert("City not found!");
    }
  };

  return (
    <div className="text-center">
      <SearchBar onSearch={handleSearch} />
      <WeatherCard data={weather} />
      {forecast.length > 0 && <ForecastCard forecast={forecast} />}
    </div>
  );
}
