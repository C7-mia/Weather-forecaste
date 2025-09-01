export default function WeatherCard({ data }) {
  if (!data) return null;

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg">
      <h2 className="text-xl font-bold mb-2">{data.name}, {data.sys.country}</h2>
      <p className="text-lg">{data.weather[0].description}</p>
      <p className="text-5xl font-bold my-2">{Math.round(data.main.temp)}°C</p>
      <div className="flex justify-around text-sm mt-4">
        <span> {data.main.humidity}%</span>
        <span> {data.wind.speed} m/s</span>
      </div>
    </div>
  );
}
