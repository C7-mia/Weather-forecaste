export default function ForecastCard({ forecast }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">
      {forecast.map((item, i) => (
        <div key={i} className="bg-white/20 rounded-xl p-4 text-center shadow">
          <p className="font-semibold">{new Date(item.dt * 1000).toLocaleDateString()}</p>
          <p>{Math.round(item.main.temp)}°C</p>
          <p className="text-sm opacity-90">{item.weather[0].main}</p>
        </div>
      ))}
    </div>
  );
}
