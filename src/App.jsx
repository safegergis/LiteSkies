import { Title, MantineProvider, Center } from "@mantine/core";
import { useState, useEffect } from "react";
import DisplayWeather from "./components/DisplayWeather";

function App() {


  return (
    <MantineProvider>
      <div>
        <Center>
          <Title order={1} align="center">
            LiteSkies
          </Title>
          <DisplayWeather location={location} />
        </Center>
      </div>
    </MantineProvider>
  );
}

export default App;
