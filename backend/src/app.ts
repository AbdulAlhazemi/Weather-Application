import * as express from 'express';
import * as cors from 'cors';
import weatherRouter from './routes/weather'; // Adjust path if necessary

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json()); // Use Express's built-in JSON parser
app.use('/api/weather', weatherRouter); // Adjust the route as needed

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});