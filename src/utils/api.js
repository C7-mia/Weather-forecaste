import axios from "axios";

const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export async function getWeather(city) {
  const { data } = await axios.get(`${BASE_URL}/weather`, {
    params: { q: city, units: "metric", appid: API_KEY },
  });
  return data;
}

export async function getForecast(city) {
  const { data } = await axios.get(`${BASE_URL}/forecast`, {
    params: { q: city, units: "metric", appid: API_KEY },
  });
  return data.list.slice(0, 5); // next 5 entries
}
