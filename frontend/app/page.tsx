"use client";

import { useState, FormEvent } from 'react';
import axios from 'axios';
import styles from './page.module.css'; // Import CSS module

// Define the WeatherData interface
interface WeatherData {
  name: string; // City name
  main: {
    temp: number; // Temperature
  };
  weather: {
    description: string; // Weather description
  }[];
}

const WeatherPage = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState('');

  const fetchWeather = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setWeatherData(null);

    try {
      const response = await axios.get('http://localhost:4000/weather', {
        params: { location },
      });
      setWeatherData(response.data);
    } catch (err) {
      console.error(err);
      setError('Location not found. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Weather App</h1>
      <form onSubmit={fetchWeather} className={styles.form}>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter city"
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Get Weather
        </button>
      </form>

      {error && <p className={styles.error}>{error}</p>}

      {weatherData && (
        <div className={styles.weatherInfo}>
          <h2 className={styles.weatherTitle}>Weather in {weatherData.name}</h2>
          <p className={styles.temperature}>Temperature: {weatherData.main.temp}°C</p>
          <p className={styles.condition}>Condition: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherPage;