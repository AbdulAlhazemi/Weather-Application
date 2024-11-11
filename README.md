# Weather-Application
This Weather App provides current weather conditions for any city around the globe. Built with Next.js on the front end, Express.js on the back end, and TypeScript for enhanced type safety, this app integrates weather data from an external API to give users up-to-date information.

## Features

- **Real-Time Weather Data**: Displays temperature, humidity, wind speed, and more.
- **Search Functionality**: Allows users to search for weather information by city.
- **Backend Integration**: Uses Express.js and TypeScript for a reliable and scalable backend.

## Technologies Used

- **Frontend**: Next.js, React
- **Backend**: Express.js, Node.js, TypeScript
- **Styling**: CSS (or your preferred styling solution)
- **API**: OpenWeatherMap (or another weather API)
- **Other**: Axios for API requests

## Installation

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Environment Variables**  
   Create a `.env` file in the root directory with the following content:

   ```env
   WEATHER_API_KEY=your_weather_api_key
   BACKEND_URL=http://localhost:5000
   ```

   Replace `your_weather_api_key` with your API key from OpenWeatherMap or the weather service you're using.

4. **Run the Backend Server**  
   Navigate to the backend folder and start the server:

   ```bash
   cd backend
   npm install
   npm run dev
   ```

5. **Run the Frontend**  
   Back in the root folder, start the Next.js frontend:

   ```bash
   npm run dev
   ```

6. **Access the App**  
   Visit `http://localhost:3000` in your browser to use the app.

## Project Structure

```plaintext
weather-app/
├── backend/                 # Express.js backend
│   ├── src/
│   ├── routes/
│   ├── controllers/
│   └── ...
├── frontend/                # Next.js frontend
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── ...
├── .env                     # Environment variables
├── README.md
└── ...
```

## API Integration

The app uses the OpenWeatherMap API (or another weather API) to fetch weather data. The API calls are handled in the backend to keep the API key secure. To get an API key, sign up at [OpenWeatherMap](https://openweathermap.org/).

## Usage

1. **Search for a City**: Type in the name of a city and click "Search" to see the weather.
2. **View Weather Data**: The app will display temperature, humidity, wind speed, and other weather details.
3. **Toggle Units**: (If implemented) Toggle between Celsius and Fahrenheit.

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License.
