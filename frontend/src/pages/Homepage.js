import { React, useEffect } from "react";
import {
  Container,
  Box,
  Text,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import Login from "../components/authentication/Login";
import Signup from "../components/authentication/Signup";

const Homepage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/");
  }, [history]);

  return (
    <Container maxW="md" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={4}
        bg="white"
        w="100%"
        maxW="md"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text
          fontSize="4xl"
          fontFamily="Work sans"
          color="black"
          textAlign="center"
        >
          Whispr
        </Text>
      </Box>
      <Box
        bg="white"
        w="100%"
        maxW="md"
        p={4}
        borderRadius="lg"
        borderWidth="1px"
        color="black"
      >
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
