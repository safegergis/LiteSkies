import { Text } from "@mantine/core";
export default function DisplayWeather({ weather }) {
  return <Text order={2}> {weather.name} </Text>;
}
