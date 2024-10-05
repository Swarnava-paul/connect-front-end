import React from "react";
import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

import Img from "../../assets/customer-service-guide-abstract.webp";

const Section_1 = () => {
  const text = {
    fontSize: "60px",
    fontFamily: "sans-serif",
    fontWeight: "600",
    color: "#73777C",
  };

  return (
    <>
      <Box flexDirection={"column"} flexGrow={1}>
        <Flex gap={10} flexDirection={"column"} mb={100}>
          <Center>
            <Heading sx={text}>Privacy Policy</Heading>
          </Center>
          <Text fontFamily={"sans-serif"} fontSize={"32px"} fontWeight={"bold"}>
            Effective Date: 2/10/2024
          </Text>
          <Text
            fontFamily={"sans-serif"}
            fontSize={"16px"}
            fontWeight={"700"}
            color={"#322E2E"}
            lineHeight={10}
          >
            At UniConn, your privacy and the security of your personal
            information are our top priorities. This Privacy Policy explains how
            we collect, use, and safeguard the data we collect when you use our
            platform and services, including accessing your Google Calendar to
            facilitate one-on-one session bookings. By using UniConn, you agree
            to the terms outlined in this policy.
          </Text>
        </Flex>
        <Center mb={20}>
          <Text fontSize={"32px"} fontFamily={"sans-serif"} fontWeight={"bold"}>
            Information We Collect
          </Text>
        </Center>
        <Flex flexDirection={"column"} color={"#322E2E"} position={"relative"}>
          <Text
            position={"absolute"}
            top={10}
            fontFamily={"sans-serif"}
            fontSize={"16px"}
            fontWeight={"700"}
          >
            We collect the following types of personal information to provide
            our services effectively:
          </Text>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <UnorderedList
              fontFamily={"sans-serif"}
              fontSize={"16px"}
              fontWeight={"700"}
              color={"#322E2E"}
              pl={18}
              lineHeight={10}
            >
              <ListItem>
                Account Information: Name, email address, and contact details
                when you create an account.
              </ListItem>
              <ListItem>
                Session Booking Information: Details related to one-on-one
                session bookings, including time, date, and participant details.
              </ListItem>
              <ListItem>
                Google Calendar Access: With your permission, we access your
                Google Calendar to book, manage, and display available sessions.
              </ListItem>
            </UnorderedList>
            <Image
              boxSize="350px"
              objectFit="cover"
              src={Img}
              alt="Dan Abramov"
            />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Section_1;
