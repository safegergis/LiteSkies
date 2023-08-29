import { useState, useEffect } from "react";
import { Loader, Text } from "@mantine/core";
import DisplayWeather from "./DisplayWeather";

function isEmpty(str) {
  return !str || str.length === 0;
}

export default function FetchWeather({}) {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState({
    lat: "",
    lon: "",
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const locationData = {
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        };
        setLocation(locationData);
        console.log(location);
      },
      (error) => {
        alert("Location is unable to be found");
      }
    );
  }, []);

  const API_KEY = "5f46ba5e597f328209a63e7d39453ff9";
  const fetchWeather = async () => {
    try {
      const fetchWeather = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => setWeatherData(data));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    if (!isEmpty(location.lat) || !isEmpty(location.lon)) {
      console.log("Location recieved:" + location.lat + " " + location.lon);
      fetchWeather();
      console.log(weatherData);
    }
  }, [location]);

  if (weatherData === null) {
    return (
      <div>
        <Loader variant="bars" />
      </div>
    );
  } else {
    console.log(weatherData);
    return (
      <div>
        <DisplayWeather weather={weatherData} />
      </div>
    );
  }
}
