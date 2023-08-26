import { Title, MantineProvider, Center } from '@mantine/core'
import { useState, useEffect } from 'react'
import DisplayWeather from './components/DisplayWeather'


function App() {
  const [location, setLocation] = useState({
    lat:"",
    lon:"",
  });
  const getLocationCall = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos.coords.latitude + " " + pos.coords.longitude)
      setLocation({
        lat:pos.coordinates.latitude,
        lon:pos.coordinates.longitude,
      });
    },
    locationError)
    }

  const locationError = (error) => {
    alert("Location is unable to be found")
  }
  useEffect(() => {
    getLocationCall();
    console.log(location)
  });
  return (
    <MantineProvider>
      <div>
        <Center>
          <Title order={1} align='center'> LiteSkies </Title>
          <DisplayWeather location={location}/>
        </Center>
      </div>
    </ MantineProvider>
  ) 
}

export default App
