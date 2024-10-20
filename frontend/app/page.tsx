"use client"

import { useState, FormEvent } from 'react';
import axios from 'axios';
import styles from './page.module.css'; 

const WeatherPage = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setWeatherData(null);

    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);

      // Send weather data to the backend
      await axios.post('http://localhost:5000/api/weather', {
        location: weatherData.name,
        temperature: response.data.main.temp,
        condition: response.data.weather[0].description,
      });
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