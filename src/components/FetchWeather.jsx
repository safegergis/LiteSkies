import { useState, useEffect } from "react";
import { Card, Loader, Text } from "@mantine/core";
import DisplayWeather from "./DisplayWeather";

function isEmpty(str) {
  return !str || str.length === 0;
}

export default function FetchWeather({ first, zip }) {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState({
    lat: "",
    lon: "",
  });

  const API_KEY = "5f46ba5e597f328209a63e7d39453ff9"; //api key

  if (first) {
    //checks to see if the first is passed as true, which will then seek out our location to provide the first card
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(
        // gets pos and sets state
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

    const fetchWeather = async () => {
      //attempts to fetch weather based on location
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
      // checlks that we have location and logs it
      if (!isEmpty(location.lat) || !isEmpty(location.lon)) {
        console.log("Location recieved:" + location.lat + " " + location.lon);
        fetchWeather(); // start fetching weather
        console.log(weatherData);
      }
    }, [location]);
  } else {
    // IF WE ARE DOING ADDITIONAL WEATHER CARDS BY ZIP
    const fetchWeather = async () => {
      try {
        const fetchWeather = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${API_KEY}` //fetch weather by zip
        )
          .then((res) => res.json())
          .then((data) => setWeatherData(data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    useEffect(() => {
      fetchWeather();
      console.log(weatherData);
    }, []);
  }
  if (weatherData === null) {
    return (
      <Card shadow="sm">
        <Loader variant="bars" />
      </Card>
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
