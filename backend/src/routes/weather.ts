import { Router, Request, Response } from 'express';

const router = Router();

// Define the route for receiving weather data
router.post('/weather', (req: Request, res: Response) => {
  const weatherInfo = req.body;

  // Log the received weather data (or do something with it)
  console.log('Received weather data:', weatherInfo);

  // Send a response back
  res.status(200).json({ message: 'Weather data received successfully!' });
});

export default router;