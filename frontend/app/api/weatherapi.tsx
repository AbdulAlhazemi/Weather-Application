// api/weather.ts
import axios from 'axios';

const API_URL = 'http://localhost:4000/weather'; // Change this URL based on your backend

export const getWeather = async (location: string) => {
  const response = await axios.get(API_URL, {
    params: { location }, // Send the location as a query parameter
  });
  return response.data;
};