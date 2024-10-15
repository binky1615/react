function WeatherInfo({ weather }) {
    if (!weather || !weather.main || !weather.weather) {
      return <p>Geen weergegevens beschikbaar.</p>; // Voorkomt fouten als de data nog niet compleet is
    }
  
    return (
      <section className="bg-gray-100 p-4 rounded">
        <h2 className="text-xl mb-4">
          Weer in {weather.name}, {weather.sys.country}
        </h2>
        <div className="flex items-center">
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt="Weather Icon"
            className="w-16 h-16"
          />
          <div className="ml-4">
            <p className="text-lg">Temperatuur: <span className="font-semibold">{Math.round(weather.main.temp)}°C</span></p>
            <p className="text-lg">Gevoelstemperatuur: <span className="font-semibold">{Math.round(weather.main.feels_like)}°C</span></p>
            <p className="text-lg">Luchtvochtigheid: <span className="font-semibold">{weather.main.humidity}%</span></p>
            <p className="text-lg">Wind snelheid: <span className="font-semibold">{weather.wind.speed} m/s</span></p>
          </div>
        </div>
      </section>
    );
  }
  
  export default WeatherInfo;