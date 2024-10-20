import express from 'express';
import bodyParser from 'body-parser';
import weatherRouter from './routes/weather';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Use the weather router
app.use('/api', weatherRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});