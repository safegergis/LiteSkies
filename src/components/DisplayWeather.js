import { useState, useEffect} from 'react'

export default function DisplayWeather({location}) {
    const [weatherData, setWeatherData] = useState(null)

    const API_KEY = "5f46ba5e597f328209a63e7d39453ff9"
    const fetchWeather = async () => {
        const d = new Date()
        const date = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate()
        try {
            const fetchWeather = await fetch(
                `https://api.openweathermap.org/data/3.0/onecall/day_summary?lat=${location.lat}&lon=${location.lon}&date=${date}&appid=${API_KEY}`
            )
            const data = fetchWeather.json()
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
        useEffect(() => {
            setWeatherData(data)
            print(weatherData)
        });
    }
}