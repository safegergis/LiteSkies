import {
  Title,
  MantineProvider,
  Stack,
  Group,
  Modal,
  Input,
  Text,
  NumberInput,
  Button,
} from "@mantine/core";
import { useState, useEffect } from "react";
import FetchWeather from "./components/FetchWeather";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { useDisclosure } from "@mantine/hooks";

function App() {
  const [locationList, setLocationList] = useState([]);
  const [addModal, { open, close }] = useDisclosure(false);
  const [inputZip, setZip] = useState();

  const handleClick = () => {
    setLocationList((prev) => [...prev, inputZip]);
    console.log(locationList);
  };
  const weatherCards = locationList.map((z) => {
    return <FetchWeather first={false} zip={z} />;
  });

  return (
    <MantineProvider>
      <div>
        <Modal
          opened={addModal}
          onClose={close}
          centered
          size={"auto"}
          withCloseButton={false}
        >
          <Title order={3} pb={2}>
            Add a location
          </Title>
          <NumberInput
            label="Enter zipcode here"
            hideControls={true}
            onChange={(v) => setZip(v)}
          />
          <Button onClick={handleClick}>Submit</Button>
        </Modal>
        <Stack align="center">
          <Title order={1} align="center">
            LiteSkies
          </Title>
          <Group>
            <FetchWeather first={true} />
            {weatherCards}
            <BsFillPlusSquareFill size={28} onClick={open} />
          </Group>
        </Stack>
      </div>
    </MantineProvider>
  );
}

export default App;
