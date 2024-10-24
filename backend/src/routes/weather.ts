import { Router, Request, Response } from 'express';
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const router = Router();
const apiKey = process.env.WEATHER_API_KEY;

// Log the API key for debugging (remove in production)
if (apiKey) {
  console.log(`Your weather API key is: ${apiKey}`);
} else {
  console.error('Weather API key is not set in the environment variables.');
}

// Define the route for fetching weather data
router.get('/weather', async (req: Request, res: Response) => {
  const location = req.query.location as string;

  if (!location || typeof location !== 'string' || location.trim() === '') {
    return res.status(400).json({ message: 'Location is required and must be a valid string.' });
  }

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
    );
    res.status(200).json(response.data);
  } catch (err) {
    if (err.response) {
      console.error('Error response:', err.response.data);
      return res.status(err.response.status).json({ message: err.response.data.message });
    } else if (err.request) {
      console.error('Error request:', err.request);
      return res.status(500).json({ message: 'Network error. Please try again later.' });
    } else {
      console.error('Error message:', err.message);
      return res.status(500).json({ message: 'An error occurred. Please try again later.' });
    }
  }
});

export default router;