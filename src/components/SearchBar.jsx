import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 justify-center mb-6">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name..."
        className="px-4 py-2 rounded-lg text-black w-64"
      />
      <button
        type="submit"
        className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-300"
      >
        Search
      </button>
    </form>
  );
    }
