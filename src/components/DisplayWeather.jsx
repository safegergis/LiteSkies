import {
  Card,
  Center,
  Divider,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import "../css/weather-icons.css";

export default function DisplayWeather({ weather }) {
  const iconurl =
    "http://openweathermap.org/img/wn/" + `${weather.weather[0].icon}` + ".png";

  var dorn = "";

  var prefix = "wi wi-";

  var today = new Date();
  var hour = today.getHours();

  if (hour > 6 && hour < 20) {
    //Day time
    dorn = "day-";
  } else {
    //Night time
    dorn = "night-";
  }
  var code = weather.weather[0].id;
  var iconD = prefix + "owm-" + dorn + code;
  console.log(iconD);
  const toFarenheit = (k) => {
    var f = 0;
    parseFloat(k);
    f = ((k - 273.15) * 9) / 5 + 32;
    return f.toFixed(1);
  };
  return (
    <Card shadow="sm" padding="lg" withBorder>
      <Card.Section>
        <Stack p={"sm"}>
          <i className={iconD} style={{ fontSize: 64, textAlign: "center" }} />
          <Title order={2} ta="center">
            {weather.name}
          </Title>
          <Divider />
        </Stack>
      </Card.Section>
      <Group position="apart" pt="sm">
        <Text weight={500}>Temperature </Text>
        <Text weight={200}>{toFarenheit(weather.main.temp) + "°F"}</Text>
      </Group>
      <Group position="apart" pt="sm">
        <Text weight={500}>Feels like</Text>
        <Text weight={200}>{toFarenheit(weather.main.feels_like) + "°F"}</Text>
      </Group>
      <Group position="apart" pt="sm">
        <Text weight={500}>Daily high</Text>
        <Text weight={200}>{toFarenheit(weather.main.temp_max) + "°F"}</Text>
      </Group>
      <Group position="apart" pt="sm">
        <Text weight={500}>Daily low</Text>
        <Text weight={200}>{toFarenheit(weather.main.temp_min) + "°F"}</Text>
      </Group>
    </Card>
  );
}
