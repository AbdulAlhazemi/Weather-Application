import { Router, Request, Response } from 'express';
import axios from 'axios';



const router = Router();
const apiKey = '87bc0e613dc2b73383fc41284e4c2f04'; // Replace with your OpenWeatherMap API key

// Define the route for fetching weather data
router.get('/weather', async (req: Request, res: Response) => {
  const location = req.query.location as string;

  if (!location) {
    return res.status(400).json({ message: 'Location is required.' });
  }

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
    );

    // Send the weather data back to the client
    res.status(200).json(response.data);
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(404).json({ message: 'Location not found. Please try again.' });
  }
});

export default router;