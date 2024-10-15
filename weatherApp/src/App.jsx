import { useState } from "react";
import WeatherInfo from "./component/WeatherInfo";

function App() {
  const apiKey = `f34657d774b86758820489a0119ca803`
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Amsterdam");
  const [searchHistory, setSearchHistory] = useState([]); 
  const [showDetails, setShowDetails] = useState(false); 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const getWeatherHandler = (e) => {
    e.preventDefault();
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Stad niet gevonden");
        }
        return response.json();
      })
      .then((data) => {
        setWeather(data);
        setSearchHistory([...searchHistory, data]); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const getBackgroundClass = () => {
    if (!weather) return 'bg-gray-100';
    
    switch (weather.weather[0].main) {
      case 'Clear':
        return 'bg-blue-500'; 
      case 'Clouds':
        return 'bg-gray-300'; 
      case 'Rain':
        return 'bg-blue-800'; 
      case 'Snow':
        return 'bg-gray-200'; 
      case 'Thunderstorm':
        return 'bg-purple-800'; 
      case 'Mist':
        return 'bg-gray-400'; 
      default:
        return 'bg-gray-100'; 
    }
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className={`min-h-screen ${getBackgroundClass()} py-8`}>
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <section>
          <form onSubmit={getWeatherHandler} className="flex items-center mb-6">
            <input
              type="text"
              placeholder="Voer hier een stad in"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="flex-grow p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white p-3 ml-3 rounded-lg shadow-md transition">
              Zoeken
            </button>
          </form>
        </section>

        {weather && (
          <section className="bg-gray-100 p-6 rounded-lg shadow-md mb-6 cursor-pointer transition hover:bg-gray-200" onClick={toggleDetails}>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              {weather.name}, {weather.sys.country}
            </h2>
            {showDetails && <WeatherInfo weather={weather} />}
          </section>
        )}

        {searchHistory.length > 0 && (
          <section className="mt-8">
            <h3 className="text-lg mb-4 font-semibold text-gray-700">Zoekgeschiedenis:</h3>
            {searchHistory.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md mb-4 cursor-pointer hover:bg-gray-50 transition"
                onClick={() => setWeather(item)}
              >
                <h2 className="text-lg font-medium text-gray-800">
                  {item.name}, {item.sys.country}
                </h2>
                {showDetails && weather.name === item.name && <WeatherInfo weather={item} /> }
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}

export default App;