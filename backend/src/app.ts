import * as express from 'express';
import * as cors from 'cors';
import weatherRouter from './routes/weather'; // Adjust path if necessary
import * as dotenv from 'dotenv';
import * as bodyParser from 'body-parser'

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 4000; // Default to 4000 if not defined


// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests only from this origin (frontend)
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type'], // Headers that can be used in requests
}));
app.use(bodyParser.json());
app.use('/weather', weatherRouter); // Adjust the route as needed

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});