import axios from "axios";

const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${process.env.WEATHER_API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export const fetchWeather = (city) => {
  const url = `${ROOT_URL}&q=${city},CA`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request,
  };
};
