import { Title, MantineProvider, Stack, Group } from "@mantine/core";
import { useState, useEffect } from "react";
import FetchWeather from "./components/fetchWeather";

function App() {
  const [locationList, setLocationList] = useState({});
  return (
    <MantineProvider>
      <div>
        <Stack align="center">
          <Title order={1} align="center">
            LiteSkies
          </Title>
          <Group>
            <FetchWeather first={true} />
          </Group>
        </Stack>
      </div>
    </MantineProvider>
  );
}

export default App;
