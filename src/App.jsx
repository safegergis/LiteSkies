import { Title, MantineProvider, Stack } from "@mantine/core";
import { useState, useEffect } from "react";
import FetchWeather from "./components/fetchWeather";

function App() {
  return (
    <MantineProvider>
      <div>
        <Stack align="center">
          <Title order={1} align="center">
            LiteSkies
          </Title>
          <FetchWeather />
        </Stack>
      </div>
    </MantineProvider>
  );
}

export default App;
