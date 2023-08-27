import { useState, useEffect } from "react";

export default function DisplayWeather({ location }) {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState({
    lat: "",
    lon: "",
  });

  const API_KEY = "5f46ba5e597f328209a63e7d39453ff9";
  const fetchWeather = async () => {
    try {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const locationData = {
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
          };
          setLocation(locationData);
          //console.log(location)
        },
        (error) => {
          alert("Location is unable to be found");
        }
      );

      const fetchWeather = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}`
      );
      const data = fetchWeather.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchWeather();
    console.log(weatherData);
  }, []);
}
