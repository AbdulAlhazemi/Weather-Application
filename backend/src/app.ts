import * as express from 'express';
import * as cors from 'cors';
import weatherRouter from './routes/weather'; // Adjust path if necessary
import * as dotenv from 'dotenv';

dotenv.config(); 
console.log(process.env); // Debug: Check if environment variables are loaded
console.log(`Your weather API key is: ${process.env.WEATHER_API_KEY}`);


const app = express();
const PORT = process.env.PORT;


// Middleware
app.use(cors());
app.use(express.json()); // Use Express's built-in JSON parser
app.use('/api/weather', weatherRouter); // Adjust the route as needed

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});