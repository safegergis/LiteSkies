import { Title, MantineProvider, Flex } from '@mantine/core'
import { useState } from 'react'


function App() {
  const [location, setLocation] = useState("")

  return (
    <MantineProvider>
      <Flex
      justify={"center"}
      >
          <Title order={1} align='center'> LiteSkies </Title>
      </Flex>
    </ MantineProvider>
  )
}

export default App
