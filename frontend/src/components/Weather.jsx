import React, { useEffect, useState } from "react";

const WeatherHistory = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const API_KEY = "9dfce63009d3ba994642a8819ad730ce";

    useEffect(() => {
        // Step 1: Get current location
        navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            // Step 2: Fetch historical weather data
            fetch(
            `https://history.openweathermap.org/data/2.5/aggregated/year?lat=${lat}&lon=${lon}&appid=${API_KEY}`
            )
            .then((response) => response.json())
            .then((data) => {
                if (data.cod && data.cod !== 200) {
                setError(data.message);
                } else {
                setWeatherData(data);
                }
            })
            .catch((err) => setError("Failed to fetch weather data"));
        },
        () => {
            setError("Location access denied.");
        }
        );
    }, []);

    if (error) return <div className="text-red-500 text-center">{error}</div>;
    if (!weatherData) return <div className="text-center">Loading weather history...</div>;

    return (
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">
            Yearly Weather Summary for {weatherData.city.name}
        </h2>
        <ul className="space-y-2">
            <li>📍 Location: {weatherData.city.coord.lat}, {weatherData.city.coord.lon}</li>
            <li>🌡️ Avg Temp (Day): {weatherData.result.temp.mean.toFixed(1)} °C</li>
            <li>🌙 Avg Temp (Night): {weatherData.result.temp.average_min.toFixed(1)} °C</li>
            <li>💧 Avg Humidity: {weatherData.result.humidity.mean}%</li>
            <li>🌧️ Avg Precipitation: {weatherData.result.precipitation.mean.toFixed(1)} mm</li>
        </ul>
        </div>
    );
};

export default WeatherHistory;
